import React from 'react';

const projects = [
  {
    title: "Aquafy-System",
    subtext: "Decentralized Greywater Treatment",
    description: "AquafySystems delivers affordable, decentralized greywater treatment using IoT and AI. Founded in 2024 in Bhubaneswar, it aims to improve water management for 600 million people in water-scarce areas.",
    image: "/src/assets/P1.jpg",
    link: "https://github.com/username/repo1",
  },
  {
    title: "Agro-Tech",
    subtext: "Optimizing Crop Yield",
    description: "AgroTech leverages IoT and machine learning to optimize crop yield and resource management with real-time insights, benefiting both small and large-scale farmers.",
    image: "/src/assets/P2.jpg",
    link: "https://github.com/username/repo2",
  },
  {
    title: "Open-Channel-Flow",
    subtext: "Fluid Dynamics Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/src/assets/P3.png",
    link: "https://github.com/username/repo3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-white">
      <h2 className="text-5xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} p-4 rounded-lg`}
          >
            <div className="flex-shrink-0 w-full md:w-1/2 p-2 flex justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-lg w-3/4 h-auto" // Adjust width to 75%
              />
            </div>
            <div className="w-full md:w-1/2 p-2 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm font-mono">{project.subtext}</p>
              <p className="my-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project &gt;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
