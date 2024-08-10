"use client";
import React from "react";

const WithdrawalConfirmationModal = ({ isModalVisible, closeModal }) => {
  return (
    <div className="p-2 sm:p-3 md:p-4 lg:p-5 fixed top-0 left-0 w-full h-screen z-[100000] bg-gray-600/25 flex flex-col justify-center items-center ">
      <div className="self-center flex flex-col gap-3 bg-white p-2 sm:p-4 shadow-md rounded-xl sm:w-[80%] w-[95%] lg:w-[35%] border-b-2 border-yellow-500">
        <p>Your withdrawal request has been placed and will be reviewed.</p>
        <button className="text-white rounded-md hover:bg-scheme-purpleOne transition-colors duration-300 bg-scheme-purple px-4 p-2 self-center" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default WithdrawalConfirmationModal;
