import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error("Something went wrong while generating tokens");
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(401).json({ error: "All the fields are required" });
    }

    if (!["customer", "admin"].includes(role)) {
      return res
        .status(400)
        .json({ error: "Invalid role. Must be either 'customer' or 'admined" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters" });
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      return res.status(400).json({ error: "username or email already taken" });
    }

    const user = await User.create({
      username,
      email,
      password,
      role,
    });

    const createdUser = await User.findById(user?._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res
        .status(500)
        .json({ error: "something went wrong when creating the user" });
    }

    res.status(201).json({
      success: true,
      message: "user created successfully",
      user: createdUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if ((!username && !email) || !password) {
      return res
        .status(401)
        .json({ error: "username or email, and password is required" });
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(404).json({ error: "user does not exists" });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "password is invalid" });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const Options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, Options)
      .cookie("refreshToken", refreshToken, Options)
      .json({
        success: true,
        message: "Welcome back",
        user: loggedInUser,
      });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error when signing in",
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    if (!req.user?._id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    await User.findByIdAndUpdate(
      req.user._id,
      { $unset: { refreshToken: 1 } },
      { new: true }
    );

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    };

    return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ error: "Logout failed" });
  }
};
