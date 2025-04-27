import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-col -space-y-16">
        <Hero />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}