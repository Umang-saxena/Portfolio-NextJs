"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Profile from "../../components/Profile";
import Experience from "../../components/Experience";
import SkillsInAbout from "@/components/SkillsInAbout";

const About = () => {
  
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Profile />
          <Experience />
          <SkillsInAbout />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
