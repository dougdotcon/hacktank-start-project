import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Barganha Criativa',
      description: 'Crie hackathons compartilhando conhecimento através de artigos ou usando HC (HackCoins).',
      icon: '💡',
      color: 'bg-verdant-green'
    },
    {
      title: 'Gamificação Completa',
      description: 'Obtenha badges, suba no ranking e acumule HC ao participar de desafios tecnológicos.',
      icon: '🏆',
      color: 'bg-pumpkin-orange'
    },
    {
      title: 'Sistema de Recompensas',
      description: 'Ganhe prêmios reais através de desempenho, votação e submissões em hackathons.',
      icon: '💰',
      color: 'bg-sky-teal'
    }
  ];

  const modalidades = [
    {
      title: 'Patrocinado por Empresa',
      description: 'Uma empresa busca desenvolver uma solução e oferece prêmios em dinheiro e/ou participação no projeto.',
      icon: '🏢',
      premio: 'R$ 4.000 a R$ 15.000',
      color: 'bg-verdant-green'
    },
    {
      title: 'Colaborativo de Investimento',
      description: 'Grupo de investidores aportam capital e o MVP vencedor recebe o investimento acumulado.',
      icon: '🤝',
      premio: '20% de participação distribuída',
      color: 'bg-pumpkin-orange'
    },
    {
      title: 'Investidor-Desenvolvedor',
      description: 'Um investidor aporta capital para atrair desenvolvedores que competirão para criar a melhor solução.',
      icon: '👨‍💻',
      premio: 'Capital + Oportunidade de parceria',
      color: 'bg-sky-teal'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-midnight-navy mb-4">Como Funciona o HackTank</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma plataforma única que redefine como hackathons são criados e executados através de um sistema de barganha e recompensas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 text-2xl`}>
                <span>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-midnight-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-warm-cream rounded-xl p-8">
          <h3 className="text-2xl font-bold text-midnight-navy mb-4">Ciclo do Hackathon</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">✍️</div>
              <h4 className="font-bold text-verdant-green">Criação</h4>
              <p className="text-sm">Crie hackathons usando conhecimento ou HC</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-bold text-verdant-green">Participação</h4>
              <p className="text-sm">Inscreva-se e desenvolva soluções em equipe</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🏁</div>
              <h4 className="font-bold text-verdant-green">Submissão</h4>
              <p className="text-sm">Envie seu projeto finalizado para avaliação</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-bold text-verdant-green">Premiação</h4>
              <p className="text-sm">Receba HC, badges e prêmios por seu desempenho</p>
            </div>
          </div>
        </div>

        <div className="mt-16" id="modalidades">
          <h3 className="text-2xl font-bold text-midnight-navy mb-6 text-center">Modalidades de Hackathons</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {modalidades.map((modalidade, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className={`${modalidade.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4`}>
                    <span>{modalidade.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-midnight-navy">{modalidade.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{modalidade.description}</p>
                <div className="bg-warm-cream p-3 rounded-lg">
                  <p className="font-medium text-midnight-navy">
                    <span className="text-verdant-green font-bold">Premiação:</span> {modalidade.premio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="#cadastro"
              className="inline-block bg-pumpkin-orange hover:bg-coral-red text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Quero participar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 