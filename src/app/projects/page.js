"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/projects'); // Adjust the endpoint as needed
                
                if (response.data.success) {
                    // Transform API data to match ProjectCard component props
                    const transformedProjects = response.data.projects.map(project => ({
                        title: project.title,
                        description: project.description,
                        tech: project.technologies,
                        demolink: project.demolink,
                        githublink: project.githublink,
                        id: project._id
                    }));
                    setProjects(transformedProjects);
                } else {
                    setError('Failed to fetch projects');
                }
            } catch (err) {
                console.error('Error fetching projects:', err);
                setError('Failed to load projects. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const LoadingSpinner = () => (
        <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
    );

    const ErrorMessage = () => (
        <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-red-800 font-semibold mb-2">Error Loading Projects</h3>
                <p className="text-red-600">{error}</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );

    const EmptyState = () => (
        <div className="text-center py-20">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
                <h3 className="text-gray-800 font-semibold mb-2">No Projects Found</h3>
                <p className="text-gray-600">No projects have been added yet.</p>
            </div>
        </div>
    );

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

                    {/* Content */}
                    {loading ? (
                        <LoadingSpinner />
                    ) : error ? (
                        <ErrorMessage />
                    ) : projects.length === 0 ? (
                        <EmptyState />
                    ) : (
                        /* Projects Grid */
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
                                    <ProjectCard {...project} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </section>
            <Footer />
        </main>
    );
};

export default Projects;