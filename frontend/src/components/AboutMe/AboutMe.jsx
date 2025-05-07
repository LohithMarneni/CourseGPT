import React from "react";

function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-6">
      <div className="bg-white shadow-xl rounded-lg max-w-4xl w-full p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          About Us
        </h2>
        <div className="text-gray-700">
          <p className="text-lg mb-4">
            This project was built as part of my application for the{" "}
            <strong>Kalvium Internship Drive 2025</strong>, where I was tasked
            with developing <strong>CourseGPT</strong> — an AI-powered course
            authoring platform designed to assist educators in efficiently
            creating and organizing high-quality learning material.
          </p>

          <p className="text-lg mb-4">
            <strong>CourseGPT</strong> simplifies educational content creation
            using AI-generated lessons, intelligent templates, and module
            organization tools. It addresses key challenges such as content
            consistency, structural coherence, and scalable course development.
          </p>

          <p className="text-lg mb-4">
            Core features include a lesson generator, smart module structuring,
            and an intuitive editor for refining content. The platform was built
            using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and
            integrated with <strong>AI APIs</strong> and a RESTful backend.
          </p>

          <p className="text-lg mb-4">
            A functional prototype was deployed with documentation and a project
            presentation highlighting key learnings and contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
