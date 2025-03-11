"use client";

import Image from "next/image";
import image1 from "../app/image1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6">
      
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full">
        {/* Profile Image */}
        <div className="mb-6 md:mb-0 md:ml-10 sm:mt-10 flex justify-center">
          <Image
            src={image1}
            alt="Tayyab Basharat"
            width={250}
            height={250}
            className="rounded-full border-4 border-purple-500 shadow-lg mt-20"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-lg text-center md:text-left md:mr-20">
        <h1 className="lg:text-4xl font-bold text-white sm:text-3xl sm:mt-10 lg:mt-24">
  Hi, I am Tayyab
</h1>
          <h3 className="text-2xl font-semibold text-purple-400 mt-2">Web Developer</h3>
          <p className="text-lg text-gray-300 mt-4">
            Hi, I'm Tayyab, a passionate software engineering student in my 
            <span className="text-green-400 font-semibold"> 6th semester</span>.  
            I specialize in <span className="text-green-400 font-semibold">HTML, CSS, JavaScript, React.js, and Next.js</span>.  
            In addition, I have experience with <span className="text-blue-400 font-semibold">Tailwind CSS</span> for styling.  
            On the backend, I work with <span className="text-yellow-400 font-semibold">Node.js, Express, and SQL</span>  
            to build robust and scalable web applications.
          </p>
          
          {/* Hire Me Button */}
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transition">
            Hire Me
          </button>

          {/* Social Media Icons */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="https://www.linkedin.com/in/tayyab-basharat-8a896a273/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-blue-400 cursor-pointer hover:text-blue-500" />
            </a>
            <a
              href="https://github.com/tayyab2468"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-300 cursor-pointer hover:text-gray-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="w-full max-w-3xl mt-16 mr-14">
        <h2 className="text-3xl font-bold text-white text-center md:text-left mb-6">Work Experience</h2>

        {/* Internship Pakistan */}
        <div className="flex flex-col items-center w-full px-4 mr-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 ">
          <h3 className="text-xl font-semibold text-purple-400">Frontend Developer</h3>
          <p className="text-gray-400 text-sm">Internship Pakistan (Remote) • Jan 2025 - March 2025</p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
            <li>Developed various UI components using <span className="text-blue-400 font-semibold">React.js</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span>.</li>
            <li>Designed modern and responsive user interfaces for multiple web applications.</li>
            <li>Improved application performance and optimized UI/UX for seamless user experience.</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-purple-400">React.js Developer</h3>
          <p className="text-gray-400 text-sm">YounDev Intern(Remote) • Sep 2024 -Oct 2024</p>
          <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
          <li>Engineered dynamic and interactive UI components leveraging <span className="text-blue-400 font-semibold">React.js</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span> to enhance user engagement.</li>

            <li>Full-Stack Blog Platform: Built with React.js and Firebase, featuring admin and
client functionality.
.</li>
          
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
