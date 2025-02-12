"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaMessage, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.push("/adminDashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setPasswordVisible((prevState) => !prevState);
  };

  const resetLink = `/admin/resetPassword?email=${email}`

  return (
    <form onSubmit={handleLogin} className="sm:w-[50%] flex flex-col gap-5">
      <h2 className="text-2xl font-semibold capitalize">Welcome back!</h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-gray-600">
          Email
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg  p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder="someone@gmail.com"
          />
          <FaEnvelope className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-gray-600">
          Password
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
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
      {error && (
        <div className="bg-red-500 p-1 rounded-md transition-opacity duration-300 lg:w-[70%]">
          <p className="text-white text-center">{error}</p>
        </div>
      )}
      <button className="rounded-lg bg-scheme-purple text-white p-2 hover:bg-scheme-purpleOne duration-300 transition-colors lg:w-[70%]">
        Login
      </button>
      <aside className="flex flex-col items-center justify-start gap-2">
        {error !== "" && (
          <div className="flex items-start self-start gap-1">
            <p className="text-sm md:text-sm ">
              {" "}
              <Link href={resetLink} className=" text-scheme-purple">
                Forgotten Password?
              </Link>
            </p>
          </div>
        )}
        <p className="text-sm md:text-sm self-start">
          Not an admin?{" "}
          <Link href={"/admin/signup"} className=" text-scheme-purple">
            Become one
          </Link>
        </p>
      </aside>
    </form>
  );
};

export default AdminLoginForm;
