import React from 'react';

const Dashboard = () => {
  // Mock data para desenvolvimento
  const userInfo = {
    name: 'Usuário Teste',
    balance: 100,
    badges: 2,
    registeredHackathons: 1
  };

  const featuredHackathons = [
    {
      id: 1,
      title: 'Hackathon Patrocinado TechCorp',
      type: 'sponsored',
      prize: 'R$ 15.000',
      endDate: '2023-12-15',
      participants: 42,
      status: 'Em andamento'
    },
    {
      id: 2,
      title: 'Hackathon Colaborativo FinTech',
      type: 'collaborative',
      prize: 'Participação no Projeto',
      endDate: '2023-12-20',
      participants: 28,
      status: 'Em andamento'
    },
    {
      id: 3,
      title: 'Hackathon Investidor-Dev IoT',
      type: 'investor-dev',
      prize: 'R$ 2.000 + Parceria',
      endDate: '2023-12-10',
      participants: 15,
      status: 'Em andamento'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-midnight-navy">Dashboard</h1>
      
      {/* Cartões de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-verdant-green text-white">
          <h3 className="font-bold text-lg">Saldo HC</h3>
          <p className="text-3xl font-bold">{userInfo.balance}</p>
          <p className="text-sm opacity-80">HackCoin</p>
        </div>
        
        <div className="card bg-pumpkin-orange text-white">
          <h3 className="font-bold text-lg">Badges</h3>
          <p className="text-3xl font-bold">{userInfo.badges}</p>
          <p className="text-sm opacity-80">Conquistas</p>
        </div>
        
        <div className="card bg-sky-teal text-white">
          <h3 className="font-bold text-lg">Inscrições</h3>
          <p className="text-3xl font-bold">{userInfo.registeredHackathons}</p>
          <p className="text-sm opacity-80">Hackathons</p>
        </div>
        
        <div className="card bg-midnight-navy text-white">
          <h3 className="font-bold text-lg">Nível</h3>
          <p className="text-3xl font-bold">Iniciante</p>
          <p className="text-sm opacity-80">Hacker</p>
        </div>
      </div>
      
      {/* Hackathons em destaque */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-midnight-navy">Hackathons em Destaque</h2>
          <a href="/hackathons" className="text-verdant-green hover:text-deep-evergreen">
            Ver todos
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredHackathons.map(hackathon => (
            <div key={hackathon.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-between">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${
                  hackathon.type === 'sponsored' ? 'bg-verdant-green' :
                  hackathon.type === 'collaborative' ? 'bg-sky-teal' : 'bg-pumpkin-orange'
                }`}>
                  {hackathon.type === 'sponsored' ? 'Patrocinado' :
                   hackathon.type === 'collaborative' ? 'Colaborativo' : 'Investidor-Dev'}
                </span>
                <span className="text-coral-red">{hackathon.status}</span>
              </div>
              
              <h3 className="font-bold mt-2 text-lg">{hackathon.title}</h3>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Prêmio:</span>
                  <span className="font-medium">{hackathon.prize}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Encerra em:</span>
                  <span className="font-medium">{new Date(hackathon.endDate).toLocaleDateString('pt-BR')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Participantes:</span>
                  <span className="font-medium">{hackathon.participants}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <a 
                  href={`/hackathons/${hackathon.id}`}
                  className="block w-full btn btn-outline text-center"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Atividade recente - placeholder */}
      <div>
        <h2 className="text-xl font-bold text-midnight-navy mb-4">Atividade Recente</h2>
        <div className="card">
          <p className="text-center py-8 text-gray-500">
            Nenhuma atividade recente para exibir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 