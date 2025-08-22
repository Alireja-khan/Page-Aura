"use client"; // 👈 this makes it a client component

import RegisterForm from "@/app/components/RegisterForm";
import React from "react";

const Register = () => {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Register;
