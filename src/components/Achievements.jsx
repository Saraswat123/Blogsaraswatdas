import React from 'react';

const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2023",
    description: "Competed with 500 teams from all over India & secured the runner-up position.",
    image: "/assets/A1.jpg",
  },
  {
    title: "L&T Ideation Water Challenge 2024",
    description: "Among 300 teams competing across all over India & achieved a place in the top 3 teams nationwide.",
    image: "/assets/A2.jpg",
  },
  {
    title: "AICTE (Innovation Design Entrepreneurship) Camp 2024",
    description: "Competed with top 20 competitors all over India, where I emerged as Champion.",
    image: "/assets/A3.jpeg",
  },
  {
    title: "Youth India Conclave Innovation Challenge 2024",
    description: "Champion",
    image: "/assets/A4.jpg",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="p-10 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {achievements.map((achieve, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <img src={achieve.image} alt={achieve.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-center">{achieve.title}</h3>
            <p className="my-2 text-center">{achieve.description}</p>
            {/* <a href="#" className="text-green-500 hover:underline">Know more &gt;</a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
