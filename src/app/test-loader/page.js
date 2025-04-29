"use client"
import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';

export default function TestLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
      {isLoading ? (
        <Loader 
          text="Testing loader..." 
          size="large" 
          color="indigo" 
          fullScreen={true} 
          background="gradient" 
        />
      ) : (
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Loader Test Page</h1>
          <p className="mb-4">The loader should have been visible for 3 seconds.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Small Loader</h2>
              <Loader size="small" text="Small loader" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Medium Loader</h2>
              <Loader size="medium" text="Medium loader" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Large Loader</h2>
              <Loader size="large" text="Large loader" />
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-white">White Loader</h2>
              <Loader size="medium" color="white" text="White loader" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 