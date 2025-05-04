import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}