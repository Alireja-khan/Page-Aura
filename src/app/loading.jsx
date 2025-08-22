"use client";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <PulseLoader color="#2563EB" size={12} speedMultiplier={0.8} />
    </div>
  );
};

export default Loading;
