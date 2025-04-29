import React from 'react';
import Loader from '../../components/Loader';

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
      <Loader 
        text="Loading projects..." 
        size="medium" 
        color="indigo" 
        fullScreen={true} 
        background="gradient" 
      />
    </div>
  );
} 