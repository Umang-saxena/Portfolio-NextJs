import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

//  title: '',
//                         description: '',
//                         githublink: '',
//                         demolink: '',
//                         technologies: ''

const ProjectCard = ({ title, description, tech, demolink, githublink }) => {
    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                    {githublink && (
                        <Link
                            href={githublink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            <span>Source</span>
                        </Link>
                    )}
                    {demolink && (
                        <Link
                            href={demolink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <FaExternalLinkAlt className="text-xl" />
                            <span>Live Demo</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

