import React from 'react';

const publications = [
  {
    title: "The Convergence of Generative AI",
    description: "Generative AI, AGI, LLMs, and NLP are converging to revolutionize industries, driving transformative advancements and new opportunities.",
    link: "https://medium.com/@saraswatdas94/the-convergence-of-generative-ai-agi-llm-and-nlp-efaf9191b2ac",
  },
  {
    title: "Confronting the Future",
    description: "As technology advances, it presents opportunities and challenges, including job displacement, data privacy, and the need for global governance.",
    link: "https://medium.com/@saraswatdas94/confronting-the-paradoxes-of-technological-advancement-and-societal-equity-saraswat-das-e7d76e3bfc96",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="bg-black text-white p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <a 
            href={pub.link} 
            key={index} 
            className="bg-transparent border border-white p-6 rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out relative flex flex-col justify-between"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div>
              <p className="mt-2 text-gray-400">{pub.description}</p> {/* Added text-white class here */}
            </div>
            <h3 className="text-xl font-bold mt-4 text-white">{pub.title}</h3>
            <span className="text-white mt-2">Read More</span> {/* Optional read more text */}

            {/* Stroke effect */}
            <div className="absolute inset-0 border border-transparent border-t-0 border-white opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;
