"use client";

import React from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
    // const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast("Submitting...")

        try {
            await signIn("credentials", { email, password, callbackUrl: "/", });
            
            // router.push("/");
            // console.log({ email, password });
        } catch (error) {
            console.log(error);
            toast.error("Failed to Logged In")
        }



        if (result.error) {
            console.error("Login failed:", result.error);
        } else {
            console.log("Login success!");
            // you can manually redirect: 
            // router.push("/dashboard");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
