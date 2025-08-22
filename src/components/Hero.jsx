import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                        Discover Your Next <span className="text-blue-600">Favorite Book</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                        Explore our curated collection of bestsellers, classics, and hidden gems.
                        Find the perfect story to get lost in.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href='/books'>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1">
                                Browse Collection
                            </button>
                        </Link>
                        <Link href='/addBooks'>
                            <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                                Add Book
                            </button>
                        </Link>
                    </div>
                    <div className="mt-10 flex items-center justify-center md:justify-start">
                        <div className="flex -space-x-4 mr-6">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center">
                                <span className="text-xs font-bold">A</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-green-200 flex items-center justify-center">
                                <span className="text-xs font-bold">B</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-yellow-200 flex items-center justify-center">
                                <span className="text-xs font-bold">C</span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-red-200 flex items-center justify-center">
                                <span className="text-xs font-bold">+99</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">Join 2,500+ readers today</p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 relative">
                    <div className="relative z-10 transform hover:scale-105 transition duration-700">
                        <div className="bg-white p-6 rounded-xl shadow-2xl">
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden relative h-80">
                                {/* Main book image */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-64 shadow-2xl rounded">
                                    <Image
                                        src="/books/Book 1.jpg"
                                        alt="Bestselling Book"
                                        width={200}
                                        height={300}
                                        className="rounded object-cover w-full h-full"
                                    />
                                </div>

                                {/* Decorative book 1 */}
                                <div className="absolute left-10 top-8 w-32 h-40 shadow-lg rotate-6">
                                    <Image
                                        src="/books/Best Selling Book.jpg"
                                        alt="Book 1"
                                        width={150}
                                        height={200}
                                        className="rounded object-cover w-full h-full"
                                    />
                                </div>

                                {/* Decorative book 2 */}
                                <div className="absolute right-10 bottom-8 w-32 h-40 shadow-lg -rotate-6">
                                    <Image
                                        src="/books/Book 2.jpg"
                                        alt="Book 2"
                                        width={150}
                                        height={200}
                                        className="rounded object-cover w-full h-full"
                                    />
                                </div>

                                {/* Sale badge */}
                                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-md">
                                    20% OFF
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>

                    {/* Floating book icon */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-red-500 rounded-lg transform rotate-12 shadow-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 0h-5v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 63.66 27l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 31.95V16z'%3E%3C/path%3E%3C/svg%3E\")" }}></div>
        </section>
    );
};

export default Hero;