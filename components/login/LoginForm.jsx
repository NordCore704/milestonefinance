import Link from "next/link";
import React from "react";
import { FaMessage, FaEnvelope, FaEye } from "react-icons/fa6";

const LoginForm = () => {
  return (
    <div className="sm:w-[50%] flex flex-col gap-5">
      <h2 className="text-2xl font-semibold capitalize">Welcome back!</h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-gray-600">
          Email
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="email"
            name="email"
            className="rounded-lg  p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder="someone@gmail.com"
          /> 
          <FaEnvelope className="text-gray-700 text-base "/>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-gray-600">
          Password
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="password"
            name="password"
            className="rounded-lg  p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          /> 
          <FaEye className="text-gray-700 text-base "/>
        </div>
      </div>
      <div className="flex items-center gap-1">
      <p className="text-sm md:text-sm">New to Milestone Financial Management? <Link href={'/auth/signup'} className=" text-scheme-purple" >Sign up</Link></p>
     
      </div>
    </div>
  );
};

export default LoginForm;
