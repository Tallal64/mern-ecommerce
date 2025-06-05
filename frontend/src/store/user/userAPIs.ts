import { LoginCredentials, userDataProps } from "@/types/products";
import { create } from "zustand";

type ApiResponse = {
  success: boolean;
  message?: string;
  error?: string;
  user?: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
};

type useUserProps = {
  registerUser: (userData: userDataProps) => Promise<ApiResponse>;
  loginUser: (userData: userDataProps) => Promise<ApiResponse>;
};

export const useUser = create<useUserProps>(() => ({
  registerUser: async (userData: userDataProps) => {
    try {
      const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          role: userData.role,
        }),
        credentials: "include",
      });

      const responseData: ApiResponse = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error during user registration:", error);
      return {
        success: false,
        error: "Network error or server unavailable",
      };
    }
  },

  loginUser: async (credentials: LoginCredentials) => {
    const response = await fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const responseData = await response.json();
    return responseData;
  },
}));
