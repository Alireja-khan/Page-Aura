"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import LoginButton from '../(authPages)/login/LoginButton';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const profileMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close profile menu if clicked outside
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target) && 
          profileButtonRef.current && !profileButtonRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
      
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-expanded]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  const links = (
    <>
      <li>
        <Link 
          className={`font-medium transition-colors px-3 py-2 rounded-md ${isActive('/') 
            ? 'bg-primary text-white' 
            : 'text-gray-700 hover:text-primary hover:bg-gray-100'}`} 
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          className={`font-medium transition-colors px-3 py-2 rounded-md ${isActive('/about') 
            ? 'bg-primary text-white' 
            : 'text-gray-700 hover:text-primary hover:bg-gray-100'}`} 
          href="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link 
          className={`font-medium transition-colors px-3 py-2 rounded-md ${isActive('/books') 
            ? 'bg-primary text-white' 
            : 'text-gray-700 hover:text-primary hover:bg-gray-100'}`} 
          href="/books"
          onClick={() => setIsMenuOpen(false)}
        >
          Books
        </Link>
      </li>
      {session && (
        <li>
          <Link 
            className={`font-medium transition-colors px-3 py-2 rounded-md ${isActive('/addBooks') 
              ? 'bg-primary text-white' 
              : 'text-gray-700 hover:text-primary hover:bg-gray-100'}`} 
            href="/addBooks"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Books
          </Link>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">PageAura</span>
            </Link>
          </div>

          {/* Centered navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-1">
              {links}
            </ul>
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-2">
            {status === 'loading' ? (
              <div className="flex items-center gap-3">
                <div className="animate-pulse bg-gray-200 w-8 h-8 rounded-full"></div>
              </div>
            ) : session ? (
              <div className="relative ml-3" ref={profileMenuRef}>
                <div>
                  <button
                    ref={profileButtonRef}
                    className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    aria-expanded={isProfileMenuOpen}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">
                      {session.user?.name ? (
                        session.user.name.charAt(0).toUpperCase()
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>

                {/* Dropdown menu */}
                {isProfileMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{session.user?.name || 'User'}</p>
                      {session.user?.email && (
                        <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                      )}
                    </div>
                    {/* <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Settings
                    </Link> */}
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <LoginButton />
                <Link
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  href="/register"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <ul className="space-y-1">
              {links}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;