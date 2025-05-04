import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col gap-10 py-8 border-b border-white/30">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4">
                        {/* Brand Section */}
                        <div className="lg:col-span-4">
                            <h1 className="text-2xl font-bold mb-4">Umang Saxena</h1>
                            <p className="text-sm text-white/80 mb-6">
                                I craft modern web experiences with cutting-edge technologies.
                                Turning complex problems into elegant solutions.{" "}
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/Umang-saxena"
                                    target="_blank"
                                    className="hover:text-white/80 transition-colors"
                                >
                                    <FaGithub
                                        size={24}
                                        color="#ffffff"
                                        className="hover:text-white/80 transition-colors"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/umang-saxena-9b5632331/"
                                    target="_blank"
                                    className="hover:text-white/80 transition-colors"
                                >
                                    <FaLinkedin
                                        size={24}
                                        color="#ffffff"
                                        className="hover:text-white/80 transition-colors"
                                    />
                                </a>
                                <a
                                    href="https://leetcode.com/Umangsaxen1"
                                    target="_blank"
                                    className="hover:text-white/80 transition-colors"
                                >
                                    <SiLeetcode
                                        size={24}
                                        color="#ffffff"
                                        className="hover:text-white/80 transition-colors"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-3">
                            <h2 className="font-semibold text-lg mb-4">RESOURCES</h2>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Tutorials
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Community
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="lg:col-span-2">
                            <h2 className="font-semibold text-lg mb-4">COMPANY</h2>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div className="lg:col-span-3">
                            <h2 className="font-semibold text-lg mb-4">STAY UPDATED</h2>
                            <p className="text-sm text-white/80 mb-4">
                                Subscribe to our newsletter for inspiration and special offers.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 min-w-0 px-3 py-2 text-sm text-black rounded-l outline-none border-4 border-white/10"
                                />
                                <button className="bg-white text-blue-600 px-3 py-2 rounded-r hover:bg-blue-50 transition-colors">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-4 text-center text-sm text-white/80">
                    <p>Copyright 2024 © Umang Saxena. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
