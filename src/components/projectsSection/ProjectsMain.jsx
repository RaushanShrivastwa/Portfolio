import React from 'react';
import { motion } from "framer-motion";

// This file now contains all necessary components and functions to avoid import errors.

// Helper function for animations, previously in 'variants.js'
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Component for the section header, previously in 'ProjectsText.js'
const ProjectsText = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        My <span className="text-blue-400">Projects</span>
      </h2>
      <p className="text-gray-400 mt-4 text-lg">
        A selection of my favorite works.
      </p>
    </div>
  );
};

// Component for displaying a single project, previously in 'SingleProject.js'
const SingleProject = ({ name, year, description, image, link, align }) => {
  const isRightAligned = align === 'right';
  const contentOrder = isRightAligned ? 'md:flex-row-reverse' : 'md:flex-row';
  const textAlign = isRightAligned ? 'md:text-right' : 'md:text-left';
  const itemAlignment = isRightAligned ? 'md:items-end' : 'md:items-start';

  return (
    <div className={`flex flex-col ${contentOrder} gap-8 items-center w-full`}>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-1/2 group"
      >
        <div className="overflow-hidden rounded-lg shadow-xl">
          <img 
            src={image} 
            alt={`Screenshot of ${name}`}
            className="rounded-lg w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </a>
      <div className={`w-full md:w-1/2 flex flex-col ${textAlign} ${itemAlignment}`}>
        <p className="text-blue-400 mb-2 font-mono">{year}</p>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-4">{name}</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-md text-gray-300 mb-6 shadow-lg border border-gray-700">
          <p>{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

// The projects array with all project data
export const projects = [
  {
    name: "AGRO-MITRA: An AgiTech Platform",
    year: "Oct 2024",
    align: "right",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    description: "An agricultural platform providing subsidies, fertilizer use, soil health, and real-time crop pricing in local languages. Built with Tailwind CSS, Python, PHP, Flask, MySQL, and Firebase.",
    link: "https://github.com/hmm183/agromitra-ML",
  },
  {
    name: "FACIAL RECOGNITION: Biometric Authentication",
    year: "Dec 2024",
    align: "left",
    image: "https://static.tildacdn.com/tild3732-6431-4664-b037-386230346464/what-is-FR.jpg",
    description: "A precise facial recognition system using TensorFlow and Keras to verify identity by comparing a reference image with a real-time camera frame. Implemented with OpenCV.",
    link: "https://github.com/RaushanShrivastwa/Facial-Recognition",
  },
  {
    name: "COLLEGE CONNECT: An Ed-Tech Platform",
    year: "Feb 2025",
    align: "right",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    description: "A web application using Node.js, Express.js, MongoDB, and Redis, enabling seamless student interactions and efficient session management with enhanced performance and scalability.",
    link: "https://github.com/RaushanShrivastwa/College-Connect",
  },
  {
    name: "FACULTY RANKER: Professor Performance Platform",
    year: "Jun 2025",
    align: "left",
    image: "https://i.ibb.co/zWVg3pYL/Screenshot-2025-09-03-023716.png",
    description: "A platform for students to rate and review professors, helping peers make informed decisions about course selections. Built with the MERN stack.",
    link: "https://github.com/hmm183/faculty_ranker"
  },
];

// The main component that brings everything together
const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-16">
      <motion.div
        variants={fadeIn("top", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-28 max-w-[1000px] mx-auto mt-20">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn(project.align === 'left' ? "right" : "left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <SingleProject
                {...project}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="w-full h-[1px] mt-24 bg-gray-700"></div>
    </div>
  );
};

export default ProjectsMain;

