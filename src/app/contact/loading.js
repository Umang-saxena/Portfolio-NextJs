import React from 'react';
import Loader from '../../components/Loader';

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF]">
      <Loader 
        text="Loading contact form..." 
        size="medium" 
        color="blue" 
        fullScreen={true} 
        background="gradient" 
      />
    </div>
  );
} 