"use client"
import React from 'react';
import Navbar from '../../components/Navbar';

const ProjectCard = ({ title, description, tech, image, link }) => {
    return (
        <div className="bg-white/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span 
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
                >
                    View Project
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
            tech: ["Next.js", "React", "Tailwind CSS"],
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg",
            link: "#"
        },
        {
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with user authentication, product management, and payment integration.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png",
            link: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates and team collaboration features.",
            tech: ["React", "Firebase", "Material-UI"],
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/thinkingImage.svg",
            link: "#"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather dashboard with location-based forecasts and interactive weather maps.",
            tech: ["JavaScript", "Weather API", "Chart.js"],
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png",
            link: "#"
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">My Projects</h1>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                        Here are some of my featured projects that showcase my skills in web development,
                        from frontend design to full-stack applications.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Projects; 