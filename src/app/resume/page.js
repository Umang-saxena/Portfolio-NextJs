"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const Resume = () => {
    const handleDownload = () => {
        // This will be updated with your Google Drive link
        window.open('https://drive.google.com/file/d/1Z0KAls0FPaBzyrx1bqB-hnb3h5ChAp4E/view?usp=drive_link', '_blank');
    };

    return (
        <main className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] relative">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            
            <div className="container mx-auto px-4 pt-24 pb-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-blue-500 mb-4">My Resume</h1>
                        <p className="text-xl text-gray-600">
                            Take a look at my professional journey and skills
                        </p>
                    </div>

                    {/* Resume Preview Section */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
                        <div className="aspect-[1/1.4] w-full max-w-2xl mx-auto bg-white rounded-lg shadow-inner overflow-hidden">
                            <iframe
                                src="https://drive.google.com/file/d/1Z0KAls0FPaBzyrx1bqB-hnb3h5ChAp4E/view?usp=drive_link"
                                className="w-full h-full"
                                title="Resume Preview"
                            />
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold
                                     hover:bg-blue-600 transition-colors duration-300 shadow-lg
                                     flex items-center gap-2 mx-auto"
                        >
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
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            Download Resume
                        </motion.button>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
};

export default Resume; 