"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email === "admin23@gmail.com" && password === "rrr778") {
      router.push("/dashboard"); // Redirect to the dashboard
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="h-[400px] w-[450px] bg-purple-300 text-center flex flex-col justify-center items-center font-semibold text-black rounded-lg shadow-md">
        <div className="text-3xl font-bold mb-6">Admin Login Form</div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          {/* Email Input */}
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-left text-lg pl-8 mb-2">
              Email:
            </label>
            <input
              placeholder="Write your email here"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind state
              className="w-[85%] h-10 text-center text-black rounded-lg font-thin border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="w-full">
            <label htmlFor="password" className="block text-left font-semibold text-lg pl-8 mb-2">
              Password:
            </label>
            <input
              placeholder="Write your password here"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind state
              className="w-[85%] h-10 text-center text-black rounded-lg font-thin border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[85%] h-10 rounded-lg bg-blue-800 mt-6 text-white hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
