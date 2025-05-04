"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const projects = [
    {
        title: 'Job Sphere (Presently Working) ',
        description: 'Built a scalable job-hunting platform using MERN stack with robust frontend, backend, and database-level validations. ',
        tech: ['ReactJs', 'Node.js', 'MongoDB', 'Express.js','Redux Toolkit'],
        image: '/images/projects/job-sphere.jpg',
        link: '/',
        github: '/'
    },
    {
        title: 'TrackIt',
        description: 'Developed an expense tracking app with real-time authentication and budget management features.',
        tech: ['Next.js', 'Firebase', 'Tailwind CSS','Mongodb','Shadcn','Recharts'],    
        image: '/images/projects/trackit.jpg',
        link: 'https://expense-tracker-sigma-jet.vercel.app/',
        github: 'https://github.com/Umang-saxena/expense-tracker'
    },
    {
        title: 'Brain Tumour Detection',
        description: ' Designed and trained a deep learning model using a 4-layer ResNet architecture to detect brain tumors from MRI scans. ',
        tech: ['Python', 'ResNet', 'Streamlit', 'Machine Learning'],
        image: '/images/projects/brain-tumour.jpg',
        link: 'https://github.com/Umang-saxena/Brain-tumour-detection',
        github: 'https://github.com/Umang-saxena/Brain-tumour-detection'
    },
    {
        title: 'React Portfolio Template',
        description: ' Designed a portfolio template as a side project with the aim of good animations and clean UI.',
        tech: ['React', 'ResNet', 'Streamlit', 'Machine Learning'],
        image: '/images/projects/portfolio.jpg',
        link: 'https://umang-portfolio-blush.vercel.app/',
        github: 'https://github.com/Umang-saxena/Portfolio'
    },
    {
        title: 'Eventify  | Events Management System (May not work due to AWS cluster credential issues)',
        description: ' Designed a portfolio template as a side project with the aim of good animations and clean UI.',
        tech: ['Python', 'DBMS', 'MySQL', 'Streamlit',"AWS RDS"],
        image: '/images/projects/eventify.png',
        link: 'https://umang-portfolio-blush.vercel.app/',
        github: 'https://github.com/Umang-saxena/Event_management1'
    }
];

const Projects = () => {
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

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
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
                </motion.div>
            </section>
            <Footer />
        </main>
    );
};

export default Projects; 