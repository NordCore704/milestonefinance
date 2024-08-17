"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const ResetPasswordMain = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  
  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/updates/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (response.ok) {
        setSuccess("Password reset successfully!");
        setError("");
        router.push('/auth/login')
      } else {
        const data = await response.json();
        setError(data.message || "Failed to reset password.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault()
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  return (
    <form
      onSubmit={handlePasswordReset}
      className="flex flex-col gap-5 justify-self-center"
    >
      <h2 className="text-2xl font-semibold capitalize">Reset Password</h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password" className="text-gray-600">
          Password
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="rounded-lg  p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          />
          <button className="" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <FaEyeSlash className="text-gray-700 text-base " />
            ) : (
              <FaEye className="text-gray-700 text-base " />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password2" className="text-gray-600">
          Confirm Password
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            name="password2"
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          />
            <button className="" onClick={toggleConfirmPasswordVisibility}>
            {isConfirmPasswordVisible ? (
              <FaEyeSlash className="text-gray-700 text-base " />
            ) : (
              <FaEye className="text-gray-700 text-base " />
            )}
          </button>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button
        type="submit"
        className="bg-scheme-purple text-white p-2 rounded-lg"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordMain;
