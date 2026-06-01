"use client"
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import { Analytics } from '@vercel/analytics/next';
import { portfolioData } from '@/lib/portfolioData';


export default function Home() {
  const aboutData = portfolioData.about;

  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar aboutData={aboutData} />
      </div>
      <div className="flex flex-col">
        <Hero aboutData={aboutData} />
        <Skills />
        <Footer aboutData={aboutData} />
      </div>
    </main>
  );
}