"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError(t("editPassword.error.requiredFields"));
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError(t("editPassword.error.mismatch"));
      return;
    }

    try {
      const response = await fetch("/api/updates/editPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      if (response.ok) {
        setSuccess(t("editPassword.success"));
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setError("");
      } else {
        const data = await response.json();
        setError(data.message || t("editPassword.error.failed"));
      }
    } catch (error) {
      setError(t("editPassword.error.general"));
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    setConfirmPasswordVisible((prevState) => !prevState);
  };
  const toggleOldPasswordVisibility = (e) => {
    e.preventDefault();
    setIsOldPasswordVisible((prevState) => !prevState);
  };

  return (
    <form onSubmit={handlePasswordChange} className="flex flex-col gap-5">
      <h2 className="text-2xl font-semibold capitalize">
        {t("editPassword.header")}
      </h2>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="oldPassword" className="text-gray-600">
          {t("editPassword.labels.oldPassword")}
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isOldPasswordVisible ? "text" : "password"}
            name="oldPassword"
            onChange={(e) => setOldPassword(e.target.value)}
            className="rounded-lg p-2 focus:outline-none text-gray-700 w-[90%]"
            placeholder="*****"
          />
          <button className="" onClick={toggleOldPasswordVisibility}>
            {isOldPasswordVisible ? (
              <FaEyeSlash className="text-gray-700 text-base " />
            ) : (
              <FaEye className="text-gray-700 text-base " />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="newPassword" className="text-gray-600">
          {t("editPassword.labels.newPassword")}
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="newPassword"
            onChange={(e) => setNewPassword(e.target.value)}
            className="rounded-lg p-2 focus:outline-none text-gray-700 w-[90%]"
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
        <label htmlFor="confirmPassword" className="text-gray-600">
          {t("editPassword.labels.confirmPassword")}
        </label>
        <div className="flex p-1 sm:px-2 items-center justify-between gap-1 w-full lg:w-[70%] border border-scheme-purple rounded-lg">
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="rounded-lg p-2 focus:outline-none text-gray-700 w-[90%]"
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
        {t("editPassword.buttons.submit")}
      </button>
    </form>
  );
};

export default ChangePasswordForm;