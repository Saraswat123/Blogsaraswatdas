import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <>
      {/* Top Navigation for Desktop */}
      <nav className="hidden lg:flex bg-black text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-bold">
            <a href="#" className="text-white">Portfolio</a>
          </div>
          <div className="space-x-8 flex-grow text-center">
            <a href="#hero" className="hover:underline text-white">Home</a>
            <a href="#projects" className="hover:underline text-white">Projects</a>
            <a href="#publications" className="hover:underline text-white">Publications</a>
            <a href="#achievements" className="hover:underline text-white">Achievements</a>
            <a href="#contact" className="hover:underline text-white">Get in Touch</a>
          </div>
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/saraswat-das/" className="text-white hover:underline">LinkedIn</a>
            <a href="https://github.com/Saraswat123" className="text-white hover:underline">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hamburger menu for mobile */}
      <nav className="lg:hidden bg-black text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <a href="#" className="text-white">Portfolio</a>
          </div>
          <div>
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 fill-current text-black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Slide menu for mobile */}
        <div
          className={`fixed top-0 right-0 h-full bg-black text-white transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
          style={{ width: '75%', zIndex: 100 }}
        >
          <div className="flex flex-col items-center justify-start h-full p-4 space-y-6">
            {/* Close Icon */}
            <button onClick={toggleMenu} className="self-end text-black focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#hero" className="text-2xl text-white hover:underline" onClick={handleLinkClick}>Home</a>
            <a href="#projects" className="text-2xl text-white hover:underline" onClick={handleLinkClick}>Projects</a>
            <a href="#publications" className="text-2xl text-white hover:underline" onClick={handleLinkClick}>Publications</a>
            <a href="#achievements" className="text-2xl text-white hover:underline" onClick={handleLinkClick}>Achievements</a>
            <a href="#contact" className="text-2xl text-white hover:underline" onClick={handleLinkClick}>Get in Touch</a>
            <a href="https://www.linkedin.com/in/saraswat-das/" className="text-2xl text-white hover:underline">LinkedIn</a>
            <a href="https://github.com/Saraswat123" className="text-2xl text-white hover:underline">GitHub</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
