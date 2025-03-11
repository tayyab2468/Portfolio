"use client";

export default function About() {
  const frontendSkills = [
    { id: 1, name: "HTML", image: "https://c4.wallpaperflare.com/wallpaper/887/817/276/html-5-html-5-logo-wallpaper-preview.jpg" },
    { id: 2, name: "CSS", image: "https://cdn.pixabay.com/photo/2016/11/19/22/32/css3-1841488_640.jpg" },
    { id: 3, name: "JavaScript", image: "https://ik.imagekit.io/ably/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png?tr=w-1728,q-50" },
    { id: 4, name: "React.js", image: "https://w7.pngwing.com/pngs/880/805/png-transparent-react-hd-logo.png" },
    { id: 5, name: "Tailwind CSS", image: "https://balticanebula.com/content/images/2023/06/plus-tailwind.jpg" },
    { id: 6, name: "Next.js", image: "https://miro.medium.com/v2/resize:fit:1000/0*dCkBR3Q3lkGMKeAh.png" },
  ];

  const backendSkills = [
    { id: 7, name: "Node.js", image: "https://images8.alphacoders.com/380/380534.png" },
    { id: 8, name: "Express.js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWd8ZEM4nA7Ycx0I70edHD_UqqGAFV7qbFgw&s" },
    { id: 9, name: "SQL", image: "https://t3.ftcdn.net/jpg/01/38/58/62/360_F_138586261_nYWe7WbUi9ouurv6tcl2WmpLaXV1xdea.jpg" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 px-6">
      
      {/* Section Title */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wide font-[Poppins]">
          My Skills & Technologies
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          The tools and technologies I use to build amazing web experiences.
        </p>
      </div>

      {/* Frontend Skills Section */}
      <div className="mb-12">
        <h2 className="text-3xl text-purple-400 font-bold text-center mb-6 uppercase">Frontend Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8">
          {frontendSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-black text-white p-5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent 
              hover:border-blue-500 hover:shadow-blue-500/50 active:border-blue-500 active:shadow-blue-500/50 focus:border-blue-500 focus:shadow-blue-500/50 touch-manipulation"
            >
              <img src={skill.image} className="w-full h-44 object-cover rounded-lg" alt={skill.name} />
              <h3 className="text-2xl font-bold mt-4 text-center text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Skills Section */}
      <div>
        <h2 className="text-3xl text-green-400 font-bold text-center mb-6 uppercase">Backend Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8">
          {backendSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-black text-white p-5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent 
              hover:border-blue-500 hover:shadow-blue-500/50 active:border-blue-500 active:shadow-blue-500/50 focus:border-blue-500 focus:shadow-blue-500/50 touch-manipulation"
            >
              <img src={skill.image} className="w-full h-44 object-cover rounded-lg" alt={skill.name} />
              <h3 className="text-2xl font-bold mt-4 text-center text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
