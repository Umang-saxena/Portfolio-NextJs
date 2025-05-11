"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

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
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-500 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">
              Get to know more about my journey, skills, and what drives me
            </p>
          </div>

          {/* Profile Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Umang Saxena
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Full-stack developer with a passion for building elegant,
                  high-performance web applications using modern frameworks like
                  React, Next.js, and Node.js. Skilled in cloud platforms such
                  as AWS and Azure, with a solid foundation in both front-end
                  and back-end development. Also deeply interested in machine
                  learning and data science.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Umang-saxena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/umang-saxena-9b5632331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Full Stack Developer Intern
                </h3>
                <p className="text-gray-600"> 
                  <a
                    href="https://www.taiyari24.com/"
                    className="hover:text-blue-300 text-blue-600"
                    target="_blank"
                  > Taiyari24  {" "}
                  </a>• May 2025 - Present</p>
                <p className="text-gray-600 mt-2">
                  Developing web application features using NextJs.
                  Collaborating with the DevOps team to deploy applications on
                  Microsoft Azure.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Website Manager (Freelancer)
                </h3>
                <p className="text-gray-600">
                  <a
                    href="https://hmei.info/"
                    className="hover:text-blue-300 text-blue-600"
                    target="_blank"
                  >
                    {" "}
                    Hiranmayi Educational Institue{" "}
                  </a>{" "}
                  • May 2025 - Present
                </p>
                <p className="text-gray-600 mt-2">
                  Maintaining and updating the website using WordPress.
                  Implementing SEO strategies to improve website visibility.
                  Collaborating with the design team to enhance user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Python",
                "MongoDB",
                "Docker",
                "AWS",
                "Firebase",
                "Postman",
                "Jira",
                "C++",
                "C",
                "Git",
                "MySQL",
                "CI/CD (GitHub Actions)"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 px-4 py-3 rounded-lg text-center 
                                             transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:from-blue-100 hover:to-blue-200
                                             border border-blue-100 hover:border-blue-200"
                >
                  <span className="relative z-10 font-medium">{skill}</span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 opacity-0 
                                                  group-hover:opacity-20 rounded-lg transition-opacity duration-300"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
