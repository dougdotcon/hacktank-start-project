import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-cream">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-midnight-navy mb-6">
            Hackathons Gamificados com Barganha Criativa
          </h1>
          <p className="text-lg mb-4 text-gray-700">
            HackTank é uma plataforma inovadora onde a criação de hackathons 
            requer uma <span className="font-medium text-verdant-green">barganha criativa</span>. 
            Participe, crie e colabore em desafios tecnológicos enquanto ganha recompensas.
          </p>
          <div className="mb-6">
            <p className="text-lg text-midnight-navy font-medium">
              Três modalidades para diferentes objetivos:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>
                <span className="font-medium text-verdant-green">Patrocinado por Empresa</span> - Prêmios de até R$ 15.000
              </li>
              <li>
                <span className="font-medium text-pumpkin-orange">Colaborativo de Investimento</span> - Participação compartilhada
              </li>
              <li>
                <span className="font-medium text-sky-teal">Investidor-Desenvolvedor</span> - Parceria com capital semente
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#cadastro" 
              className="bg-verdant-green hover:bg-deep-evergreen text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Entrar na Waitlist
            </a>
            <a 
              href="#como-funciona" 
              className="border-2 border-midnight-navy text-midnight-navy font-bold py-3 px-6 rounded-lg text-center hover:bg-midnight-navy hover:text-white transition-colors"
            >
              Como Funciona
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="HackTank Logo" 
            className="w-3/4 max-w-md"
          />
        </div>
      </div>
      
      {/* Banner destacando o prazo típico */}
      <div className="mt-12 bg-midnight-navy py-4 text-center">
        <div className="container mx-auto px-4">
          <p className="text-white font-bold text-lg">
            Projetos com ciclo rápido: <span className="text-sunflower-yellow">48 horas</span> para desenvolver sua ideia!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 