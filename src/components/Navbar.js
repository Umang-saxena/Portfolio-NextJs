"use client";
import React from "react";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Me", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Github", path: "https://github.com/Umang-saxena" },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-blue-600 shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <p
                        className={`${
                            isScrolled
                                ? "text-white"
                                : "text-gray-800 text-2xl font-bold"
                        }`}
                    >
                        Umang Saxena
                    </p>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.path}
                            className={`group flex flex-col gap-0.5 ${
                                isScrolled ? "text-white" : "text-gray-800"
                            }`}
                        >
                            {link.name}
                            <div
                                className={`${
                                    isScrolled ? "bg-white" : "bg-gray-800"
                                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                            />
                        </Link>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1Z0KAls0FPaBzyrx1bqB-hnb3h5ChAp4E/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border flex items-center gap-2 ${
                            isScrolled
                                ? "border-white text-white hover:bg-white hover:text-blue-600"
                                : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                        } px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all`}
                    >
                        Resume <FaArrowAltCircleRight className="text-xl" />
                    </a>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/umang-saxena-9b5632331/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                            isScrolled
                                ? "bg-white text-blue-600 hover:bg-blue-700 hover:text-white"
                                : "bg-gray-800 text-white hover:bg-gray-700"
                        } px-8 py-2.5 rounded-full transition-all duration-500 flex items-center gap-2`}
                    >
                        Let’s Connect <FaArrowAltCircleRight className="text-xl" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`h-6 w-6 cursor-pointer ${
                            isScrolled ? "text-white" : "text-gray-800"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen ${
                    isScrolled ? "bg-blue-600" : "bg-white"
                } text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium transition-all duration-500 z-40 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg
                        className={`h-6 w-6 ${
                            isScrolled ? "text-white" : "text-gray-800"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Mobile Links */}
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        href={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`${
                            isScrolled ? "text-white" : "text-gray-800"
                        } hover:opacity-80 transition-colors text-lg`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    href="https://drive.google.com/file/d/1Z0KAls0FPaBzyrx1bqB-hnb3h5ChAp4E/view?usp=drive_link"
                    className={`border flex items-center gap-2 ${
                        isScrolled
                            ? "border-white text-white hover:bg-white hover:text-blue-600"
                            : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    } px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all`}
                >
                    Resume <FaArrowAltCircleRight className="text-xl" />
                </Link>

                <a
                    href="https://www.linkedin.com/in/umang-saxena-9b5632331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                        isScrolled
                            ? "bg-white text-blue-600 hover:bg-blue-700 hover:text-white"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                    } px-8 py-2.5 rounded-full transition-all duration-500 flex items-center gap-2`}
                >
                    Let’s Connect <FaArrowAltCircleRight className="text-xl" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
