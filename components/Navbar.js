'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    return (
        <>
            {/* Main Navbar - Always visible at top */}
            <nav className='bg-white w-[90vw] max-w-6xl mx-auto absolute top-10 left-1/2 transform -translate-x-1/2 rounded-full px-8 py-4 shadow-lg z-50 transition-all duration-300'>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                            alt="Linktree Logo"
                            className='h-8 w-auto'
                            width={120}
                            height={32}
                            priority
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                            Products
                        </Link>
                        <Link href="/templates" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                            Templates
                        </Link>
                        <Link href="/marketplace" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                            Marketplace
                        </Link>
                        <Link href="/learn" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                            Learn
                        </Link>
                        <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                            Pricing
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link href="/admin" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
                            Admin
                        </Link>
                        <Link
                            href="/logout"
                            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium"
                        >
                            Log out
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>


        </>
    )
}

export default Navbar