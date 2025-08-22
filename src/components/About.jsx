import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="relative h-96 w-full">
                                <Image
                                    src="/books/bookstore-about.jpg"
                                    alt="PageAura Bookstore Interior"
                                    fill
                                    className="object-cover rounded-2xl"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl mx-4">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Book Collection</h3>
                                        <p className="text-gray-600">5000+ titles and growing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 z-0"></div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Our Story: More Than Just a Bookstore
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Founded in 2010, PageAura began as a small neighborhood bookshop with a simple mission: 
                            to connect readers with stories that inspire, educate, and entertain. Today, we've grown 
                            into a community hub for book lovers, offering carefully curated selections across all genres.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Curated Selection</h3>
                                    <p className="text-gray-600">Every book is handpicked by our team of avid readers</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Community Focused</h3>
                                    <p className="text-gray-600">Hosting book clubs, author events, and reading groups</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Secure Shopping</h3>
                                    <p className="text-gray-600">Your privacy and data security are our priority</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
                                    <p className="text-gray-600">30-day return policy on all purchases</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6 mb-8">
                            <p className="text-gray-700 italic mb-4">
                                "Books are a uniquely portable magic. At PageAura, we believe every book sold is not just a transaction, 
                                but the beginning of someone's next adventure."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    JS
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Nova Khan</p>
                                    <p className="text-sm text-gray-600">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;