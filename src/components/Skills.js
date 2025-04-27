import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    const skills = [
        { icon: FaReact, name: 'React', color: '#61DAFB' },
        { icon: TbBrandNextjs, name: 'Next.js', color: '#000000' },
        { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
        { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
        { icon: FaPython, name: 'Python', color: '#3776AB' },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' }
    ];

    return (
        <section className="relative py-16 bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] overflow-hidden">
            {/* Top left light effect */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-15"></div>
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
            
            <div className="container mx-auto px-4 relative">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Technologies I Work With
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-white/30 backdrop-blur-sm 
                                     hover:bg-white hover:shadow-lg hover:scale-110 transform transition-all duration-300"
                        >
                            <skill.icon 
                                className="text-4xl text-blue-600 group-hover:text-[var(--skill-color)] transition-colors duration-300"
                                style={{ '--skill-color': skill.color }}
                            />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 