"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Missing import
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

export default function Home() {
  const [aboutdata, setAboutData] = useState(null);
  const [loading, setLoading] = useState(false); // Missing state
  const [error, setError] = useState(null); // Missing state

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/about', {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });

      if (response.data.success && response.data.about.length > 0) {
        setAboutData(response.data.about[0]); // Get first record
        setError(null);
      } else {
        throw new Error('No about data found');
      }
    } catch (err) {
      console.error('Error fetching about data:', err);
      setError(err.response?.data?.error || err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <main className="relative overflow-hidden">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      </main>
    );
  }

  // Handle error state
  if (error) {
    return (
      <main className="relative overflow-hidden">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-red-500">Error: {error}</div>
          <button 
            onClick={fetchAboutData}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar aboutData={aboutdata} />
      </div>
      <div className="flex flex-col">
        <Hero aboutData={aboutdata} />
        <Skills aboutData={aboutdata} />
        <Footer aboutData={aboutdata} />
      </div>
    </main>
  );
}