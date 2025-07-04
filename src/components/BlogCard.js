import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';


const ProjectCard = ({ title, link, pubDate, content, category }) => {
    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-5">{content}</p>

                {/* Tech Stack */}
                {category && category.length > 0 &&
                    <div className="flex flex-wrap gap-2 mb-4"><p>Topics : </p>
                        {category.map((item, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                }

                {/* Links */}
                <div className="flex items-center gap-4">
                    <FaCalendarAlt className="text-xl" />
                    <span>
                        {new Date(pubDate).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </span>

                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <FaExternalLinkAlt className="text-xl" />
                            <span>See Blog</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

