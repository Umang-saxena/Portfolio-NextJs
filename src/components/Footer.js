import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
<footer className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col gap-10 py-8 border-b border-white/30 items-center text-center">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 gap-8 lg:gap-4 w-full max-w-4xl">
                        {/* Brand Section */}
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Umang Saxena</h1>
                            <p className="text-sm text-white/80 mb-6">
                                I craft modern web experiences with cutting-edge technologies.
                                Turning complex problems into elegant solutions.{" "}
                            </p>
                            <div className="flex items-center gap-4 justify-center">
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
