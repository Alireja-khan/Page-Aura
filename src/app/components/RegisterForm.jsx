"use client"

import React, { useState } from 'react';
import { registerUser } from '../actions/auth/registerUser';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

const RegisterForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        
        setIsLoading(true);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        toast.loading('Registering...');

        try {
            // Register the user
            await registerUser({ name, email, password });
            
            // Sign in the user immediately after registration
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });
            
            toast.dismiss();
            
            if (result.error) {
                toast.error('Registration successful but login failed');
                console.error('Login error:', result.error);
                router.push('/login');
            } else {
                toast.success('Registration successful!');
                router.push('/books');
            }
        } catch (error) {
            toast.dismiss();
            toast.error('Registration failed');
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 rounded-lg font-medium transition ${
                        isLoading 
                            ? 'bg-blue-400 text-white cursor-not-allowed' 
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Registering...
                        </div>
                    ) : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;