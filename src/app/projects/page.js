"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: '/images/projects/ecommerce.jpg',
        link: 'https://ecommerce-demo.com',
        github: 'https://github.com/yourusername/ecommerce'
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
        tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
        image: '/images/projects/taskmanager.jpg',
        link: 'https://taskmanager-demo.com',
        github: 'https://github.com/yourusername/taskmanager'
    },
    {
        title: 'Weather Dashboard',
        description: 'A weather dashboard that displays current weather conditions and forecasts using OpenWeather API.',
        tech: ['React', 'OpenWeather API', 'Chart.js'],
        image: '/images/projects/weather.jpg',
        link: 'https://weather-demo.com',
        github: 'https://github.com/yourusername/weather'
    }
];

const Projects = () => {
    return (
        <main className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-blue-500 mb-4">My Projects</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Here are some of the projects I&apos;ve worked on. Each project is unique and
                            showcases different aspects of my skills and experience.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects; 