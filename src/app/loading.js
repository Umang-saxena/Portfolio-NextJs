import React from 'react';
import Loader from '../components/Loader';

export default function Loading() {
  return (
    <Loader 
      text="Loading your portfolio..." 
      size="large" 
      color="indigo" 
      fullScreen={true} 
      background="gradient" 
    />
  );
} 