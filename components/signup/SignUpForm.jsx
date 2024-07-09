import Link from "next/link";
import React from "react";
import { FaEnvelope, FaUser, FaPhone, FaEye } from "react-icons/fa6";

const SignUpForm = () => {
  return (
    <div className="sm:w-[50%] flex flex-col gap-5">
      <h2 className="text-2xl font-semibold capitalize">Sign up to <span className="text-scheme-purple">Explore!</span></h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="first_name" className="text-gray-600">
          First Name
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="text"
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
            name="password2"
            className="rounded-lg  p-1 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          />
          <FaEye className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-sm sm:text-sm md:text-sm">
          Already a member? 
           <Link
          href={"/auth/login"}
          className=" text-scheme-purple"
        > Login
        </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
