"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaUser, FaPhone, FaEye } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter()
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !secondName ||
      !mobileNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please make sure to fill all form fields");
      return;
    }

    if (confirmPassword !== password) {
      setError('password confirmation does not match set password')
      return
    }

    try {
      const userExistsResponse = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userExistsResponse.json()

      if(user){
        setError('User already exists')
        return;
      }
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          secondName,
          mobileNumber,
          email,
          password,
        }),
      });

      if (response.ok) {
        const form = e.target;
        form.reset();
        router.push('/dashboard')
      } else {
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="sm:w-[50%] flex flex-col gap-5">
      <h2 className="text-2xl font-semibold capitalize">
        Sign up to <span className="text-scheme-purple">Explore!</span>
      </h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="first_name" className="text-gray-600">
          First Name
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            name="first_name"
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="Joe"
          />
          <FaUser className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="last_name" className="text-gray-600">
          Last Name
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="text"
            onChange={(e) => setSecondName(e.target.value)}
            name="last_name"
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="Schmoe"
          />
          <FaUser className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="mobile_number" className="text-gray-600">
          Mobile Number
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="text"
            name="mobile_number"
            onChange={(e) => setMobileNumber(e.target.value)}
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="XXXXX"
          />
          <FaPhone className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-gray-600">
          Email
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="someone@gmail.com"
          />
          <FaEnvelope className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password" className="text-gray-600">
          Password
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          />
          <FaEye className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password2" className="text-gray-600">
          Confirm Password
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="password2"
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          />
          <FaEye className="text-gray-700 text-base " />
        </div>
      </div>
      {error && (
        <div className="bg-red-500 p-1 rounded-md transition-opacity duration-300 lg:w-[70%]">
          <p className="text-white text-center">{error}</p>
        </div>
      )}
      <button className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors lg:w-[70%]">
        Sign Up
      </button>
      <div className="flex items-center gap-1">
        <p className="text-sm sm:text-sm md:text-sm">
          Already a member?
          <Link href={"/auth/login"} className=" text-scheme-purple">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
