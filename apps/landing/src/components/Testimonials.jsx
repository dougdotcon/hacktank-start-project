import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Através do HackTank, consegui investimento para meu projeto de IA e conheci parceiros incríveis para continuar o desenvolvimento.",
      author: "Ana Silva",
      role: "Desenvolvedora Full Stack",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "Como investidor, encontrei um modelo de negócio que me permitiu testar várias ideias com baixo custo e encontrar talentos excepcionais.",
      author: "Marcos Oliveira",
      role: "Angel Investor",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "Nossa empresa patrocinou um hackathon e conseguimos uma solução inovadora pelo custo de um único contratado. Valeu muito a pena!",
      author: "Carla Mendes",
      role: "CTO • TechSolutions",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-16 bg-midnight-navy" id="depoimentos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">O Que Dizem Sobre o HackTank</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg transition-all hover:bg-opacity-15"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-sky-teal"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sky-teal text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="relative">
                <span className="text-5xl text-verdant-green absolute top-0 left-0 opacity-30">"</span>
                <p className="pl-6 pt-3 text-gray-300 italic">
                  {testimonial.quote}
                </p>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#cadastro"
            className="inline-block bg-pumpkin-orange hover:bg-coral-red text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Quero fazer parte disso
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 