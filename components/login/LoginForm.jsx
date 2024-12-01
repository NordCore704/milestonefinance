"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const router = useRouter();
  const resetLink = `/auth/resetPassword?email=${email}`;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError(t("login.error"));
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleLogin} className="sm:w-[50%] flex flex-col gap-5">
      <h2 className="text-2xl font-semibold capitalize">{t("login.welcomeBack")}</h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="email" className="text-gray-600">
          {t("login.email")}
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg  p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder={t("login.placeholder.email")}
          />
          <FaEnvelope className="text-gray-700 text-base " />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="password" className="text-gray-600">
          {t("login.password")}
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg  p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder={t("login.placeholder.password")}
          />
          <button onClick={togglePasswordVisibility}>
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
        {t("login.loginButton")}
      </button>
      <aside className="flex flex-col gap-2">
        {error && (
          <div className="flex items-center gap-1">
            <p className="text-sm md:text-sm ">
              <Link href={resetLink} className=" text-scheme-purple">
                {t("login.forgotPassword")}
              </Link>
            </p>
          </div>
        )}
        <div className="flex items-center gap-1">
          <p className="text-sm md:text-sm ">
            {t("login.noAccount")}{" "}
            <Link href={"/auth/signup"} className=" text-scheme-purple">
              {t("login.signup")}
            </Link>
          </p>
        </div>
      </aside>
    </form>
  );
};

export default LoginForm;