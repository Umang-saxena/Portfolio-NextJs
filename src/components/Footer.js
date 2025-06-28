import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = ({ aboutData }) => {
    return (
        <footer className="bg-blue-600 text-white py-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col gap-10 py-8 border-b border-white/30 items-center text-center">
                    <div className="grid grid-cols-1 gap-8 lg:gap-4 w-full max-w-4xl">
                        <div>
                            <h1 className="text-2xl font-bold mb-4">{aboutData?.name }</h1>
                            <p className="text-sm text-white/80 mb-6">
                                {aboutData?.description || "Crafting modern web experiences with cutting-edge technologies."}
                            </p>
                            <div className="flex items-center gap-4 justify-center">
                                {aboutData?.githublink && (
                                    <a
                                        href={aboutData.githublink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="hover:text-white/80 transition-colors"
                                    >
                                        <FaGithub size={24} />
                                    </a>
                                )}
                                {aboutData?.leetcodelink && (
                                    <a
                                        href={aboutData.leetcodelink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white/80 transition-colors"
                                    >
                                        <SiLeetcode size={24} />
                                    </a>
                                )}
                                {aboutData?.linkedinlink && (
                                    <a
                                        href={aboutData.linkedinlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white/80 transition-colors"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 text-center text-sm text-white/80">
                    <p>Copyright 2025 © {aboutData?.name || "Umang Saxena"}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
