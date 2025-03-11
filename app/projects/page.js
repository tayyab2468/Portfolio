import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  const image2 = "/shosweb.png";
  const image3 = "/Screenshot (1134).png";
  const image4 = "/Screenshot (1135).png";
  const image5 = "/Screenshot (1136).png";
  const image6 = "/Screenshot (1137).png";
  const image7 = "/Screenshot (1138).png";
  const image8 = "/Screenshot (1139).png";
  const image9 = "/Screenshot (1140).png";
  const image10 = "/Screenshot (1141).png";
  
  const projects = [
    { id: 1, name: "ShoesWeb", image: image2, category: "HTML, CSS, JavaScript, React, Tailwind", description: "An e-commerce website for shoes using Tailwind CSS and React." , github: "https://github.com/tayyab2468/ecommerce",
      live: "https://shooseweb.netlify.app/" },
    { id: 2, name: "Microsoft Clone", image: image3, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A clone of the Microsoft homepage built with Tailwind CSS and React." , github: "https://github.com/tayyab2468/Microsoft_Clone",
      live: "https://msccolne567.netlify.app" },
    { id: 3, name: "News App", image: image4, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A dynamic news application displaying real-time news using React and Tailwind.", github: "https://github.com/tayyab2468/blogs_web",
      live: "https://friendly-toffee-9a42b6.netlify.app/" },
    { id: 4, name: "Travel Adventure", image: image5, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A travel adventure website offering destination packages and booking features." , github: "https://github.com/tayyab2468/blogs_web",
      live: "https://best-adventu.netlify.app/" },
    { id: 5, name: "Internship Pak", image: image6, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A platform showcasing different internship opportunities with Tailwind CSS and React.", github: "https://github.com/tayyab2468/internship-portal",
      live: "https://internship-portal-app.netlify.app/" },
    { id: 6, name: "Physics Drop Simulator", image: image7, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A physics simulation app demonstrating gravity and object interactions.", github: "https://github.com/tayyab2468/React_Mini_Project",
      live: "https://phypractical.netlify.app/"  },
    { id: 7, name: "Weather App", image: image8, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A weather forecasting app fetching real-time data using APIs.", github: "https://github.com/tayyab2468/Weather-",
      live: "https://weatherlatest.netlify.app/"  },
    { id: 8, name: "BMI Calculator", image: image9, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A Body Mass Index (BMI) calculator that helps users assess their health.", github: "https://github.com/tayyab2468/Body-mass-Calculator",
      live: "https://glittery-khapse-1d1d01.netlify.app/" },
    { id: 9, name: "To-Do List", image: image10, category: "HTML, CSS, JavaScript, React, Tailwind", description: "A simple to-do list application for task management using React and Tailwind CSS.", github: "https://github.com/tayyab2468/Todolist",
      live: "https://iridescent-yeot-ef553a.netlify.app/" }
  ]; 
  

  return (
    <div className="bg-gray-900  py-12 px-6">
      {/* Section Title */}
      <div className="text-center mb-8 mt-12">
        <h1 className="text-4xl sm:text-4xl font-extrabold text-white uppercase tracking-wide font-[Poppins] ">
          My Projects
        </h1>
        
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#2a2e35] text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={project.image}
              className="w-full h-44 object-cover rounded-lg"
              alt={project.name}
            />
            <h3 className="text-2xl font-bold mt-4 text-center text-gray-200">
              {project.name}
            </h3>
            <p className="text-gray-400 mt-2 text-center">{project.description}</p>

            {/* Project Categories */}
            <ul className="flex justify-center flex-wrap mt-2">
              {project.category.split(", ").map((cat, idx) => (
                <li
                  key={idx}
                  className="bg-gray-700 text-gray-200 px-3 py-1 rounded-lg inline-block m-1 text-sm hover:bg-gray-600"
                >
                  {cat}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#4c5fd5] text-white px-4 py-2 rounded-lg hover:bg-[#3b4cc0] transition"
              >
                <FaExternalLinkAlt className="mr-2" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
