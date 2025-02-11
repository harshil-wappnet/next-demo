"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-semibold">Build By Ziempire</h3>
            <div className="flex space-x-4 mt-2">
                {/* LinkedIn Button */}
                <Link
                    href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.233c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.785 1.75-1.75 1.75zm13.5 11.233h-3v-5.729c0-1.373-1.126-2.471-2.5-2.471s-2.5 1.098-2.5 2.471v5.729h-3v-10h3v1.572c.743-.875 2.214-1.572 3.5-1.572 2.485 0 4.5 2.015 4.5 4.5v5.5z"
                        />
                    </svg>
                </Link>

                {/* GitHub Button */}
                <a
                    href="https://github.com/YOUR_GITHUB_PROFILE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.547-1.387-1.334-1.756-1.334-1.756-1.091-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.805 1.305 3.49.998.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.237-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.769.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.628-5.475 5.922.432.372.816 1.103.816 2.222v3.293c0 .322.192.694.799.576 4.765-1.587 8.202-6.083 8.202-11.385 0-6.627-5.373-12-12-12z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Footer