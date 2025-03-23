import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-300">
        {/* Logo Section */}
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-20">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-4 text-center bg-red-100 p-2 rounded">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-4">
          <Input
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
