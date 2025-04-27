"use client"
import React, { useState } from 'react'

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative w-full h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] flex items-center pt-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            
            <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                            Hi, I&apos;m <span className="text-blue-500">Umang Saxena</span>
                            <br />
                            Full Stack Developer
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                            I craft modern web experiences with cutting-edge technologies. 
                            Turning complex problems into elegant solutions.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                            <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/50">
                                View Projects
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-200">
                                Contact Me
                            </button>
                        </div>
                        <div className="mt-12 flex items-center gap-6 justify-center md:justify-start">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-gray-600">Available for work</span>
                            </div>
                            <div className="h-6 w-px bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Based in India</span>
                                <span className="text-2xl">🇮🇳</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 relative">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                            <img 
                                className="relative z-10 w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500 hover:rotate-2"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg" 
                                alt="Umang Saxena"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero