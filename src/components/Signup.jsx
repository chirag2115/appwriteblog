import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }, // Destructuring form errors
  } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-#f3f4f6 py-20">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-10 border border-black/10 mt-10">
        {/* Logo Section */}
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-24">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold">Sign up to create an account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6">
          <div className="space-y-4">
            {/* Full Name Input */}
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              autoComplete="name"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            {/* Email Input */}
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            {/* Password Input */}
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            {/* Signup Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
