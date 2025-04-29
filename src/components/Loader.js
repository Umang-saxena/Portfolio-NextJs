"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ 
  text = "Loading...", 
  size = "medium", 
  color = "gray", 
  fullScreen = false,
  background = "transparent"
}) => {
  // Size variants
  const sizeVariants = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  // Color variants
  const colorVariants = {
    gray: "text-gray-400",
    white: "text-white",
    blue: "text-blue-500",
    indigo: "text-indigo-500"
  };

  // Background variants
  const backgroundVariants = {
    transparent: "bg-transparent",
    white: "bg-white",
    dark: "bg-gray-800",
    gradient: "bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]"
  };

  const containerClasses = fullScreen 
    ? `min-h-screen ${backgroundVariants[background]} flex items-center justify-center`
    : `py-16 ${backgroundVariants[background]} flex items-center justify-center`;

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <div className={`${sizeVariants[size]} ${colorVariants[color]} animate-spin`}>
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className={`${colorVariants[color]} text-sm font-medium`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loader; 