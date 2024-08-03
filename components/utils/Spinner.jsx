// components/Spinner.js
import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-l-4 border-r-4 border-purple-500"></div>
    </div>
  );
}

export default Spinner