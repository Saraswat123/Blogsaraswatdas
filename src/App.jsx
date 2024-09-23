import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import ContactForm from './components/ContactForm';
import CreatedBy from './components/Profile';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Publications />
      <Achievements />
      <ContactForm />
      <CreatedBy />
    </div>
  );
};

export default App;
