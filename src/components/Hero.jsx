import React from 'react';

const Hero = () => {
  return (
    <section id='hero' className="bg-black text-white flex flex-col md:flex-row items-center h-screen pt-20">
      {/* Image container */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center p-10">
        <img
          src="/assets/Hero_item.jpeg"
          alt="Profile"
          className="rounded-full w-11/12 h-auto"
        />
      </div>
      {/* Text container */}
      <div className="w-full md:w-1/2 md:ml-10 flex flex-col justify-center items-left h-full p-10 text-center md:text-left">
        <h1 className="text-4xl font-bold">Saraswat Das</h1>
        <p className="my-4 text-sm md:text-base">
          I’m an innovator turning challenges into tech solutions. I developed AquafySystems and the Ocean Tech Module to tackle environmental issues. Recognized by the Government of India, I’m committed to impactful, sustainable solutions.
        </p>
        <a href="#projects" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Let's get started</a>
      </div>
    </section>
  );
};

export default Hero;
