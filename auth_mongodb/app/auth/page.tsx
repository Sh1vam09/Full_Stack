"use client";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Container from "@/components/Containers";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-10">
        {/* Toggle Button */}
        <div className="mb-6 bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              isLogin
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              !isLogin
                ? "bg-white shadow text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* The Form */}
        {isLogin ? <SignIn /> : <SignUp />}
      </div>
    </Container>
  );
}
