import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-2 text-center">Get in Touch</h2>
      <p className="text-center mb-6">
        Feel free to reach out for collaborations, inquiries, or just to say hello.<br /> 
        I look forward to connecting with you!
      </p>
      <form className="bg-transparent p-0 rounded-lg max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-2 bg-white text-black rounded text-left" 
            placeholder="Please enter your email" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mobile</label>
          <input 
            type="text" 
            className="w-full p-2 bg-white text-black rounded text-left" 
            placeholder="Enter mobile number" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea 
            className="w-full p-2 bg-white text-black rounded text-left h-32" 
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
