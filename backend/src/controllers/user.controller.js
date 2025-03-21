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
    throw new Error("Something went wrong when generating tokens");
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "All the fields are required" });
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      return res
        .status(400)
        .json({ success: false, message: "this user already exists" });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const createdUser = await User.findById(user?._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res.status(500).json({
        success: false,
        message: "something went wrong when creating the user",
      });
    }

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username && !email) {
      return res
        .status(401)
        .json({ success: false, message: "username or email is required" });
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user does not exists" });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "password is invalid" });
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
        message: "user logged In successfully",
        user: loggedInUser,
      });
  } catch (error) {
    console.error("Error in logIn:", error); // Log the actual error for debugging
    res.status(500).json({
      success: false,
      message: "Internal server error when signing in",
    });
  }
};

export const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );

  const Options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("accessToken", Options)
    .clearCookie("refreshToken", Options)
    .json({ success: true, message: "user logged out successfully" });
};
