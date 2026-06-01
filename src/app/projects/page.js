"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { portfolioData } from '@/lib/portfolioData';

const Projects = () => {
    const projects = portfolioData.projects;

    return (
        <main className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-blue-500 mb-4">My Projects</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Here are some of the projects I&apos;ve worked on. Each project is unique and
                            showcases different aspects of my skills and experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                }}
                            >
                                <ProjectCard title={project.title} description={project.description} tech={project.technologies} demolink={project.demolink} githublink={project.githublink} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <Footer />
        </main>
    );
};

export default Projects;