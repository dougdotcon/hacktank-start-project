import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const HackathonList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Mock data para desenvolvimento
  const hackathons = [
    {
      id: 1,
      title: 'Hackathon Patrocinado TechCorp',
      description: 'Desenvolva soluções inovadoras para problemas reais da empresa TechCorp e concorra a prêmios de até R$15.000.',
      type: 'sponsored',
      prize: 'R$ 15.000',
      startDate: '2023-11-15',
      endDate: '2023-12-15',
      participants: 42,
      status: 'active',
      company: 'TechCorp',
      tags: ['IA', 'Machine Learning', 'Big Data']
    },
    {
      id: 2,
      title: 'Hackathon Colaborativo FinTech',
      description: 'Participe do desenvolvimento de uma solução financeira inovadora e tenha participação compartilhada no projeto final.',
      type: 'collaborative',
      prize: 'Participação no Projeto',
      startDate: '2023-11-20',
      endDate: '2023-12-20',
      participants: 28,
      status: 'active',
      company: null,
      tags: ['Fintech', 'Blockchain', 'Pagamentos']
    },
    {
      id: 3,
      title: 'Hackathon Investidor-Dev IoT',
      description: 'Um investidor busca desenvolvedores para criar um sistema IoT inovador com prêmio e possibilidade de parceria.',
      type: 'investor-dev',
      prize: 'R$ 2.000 + Parceria',
      startDate: '2023-11-10',
      endDate: '2023-12-10',
      participants: 15,
      status: 'active',
      company: null,
      tags: ['IoT', 'Hardware', 'Sensores']
    },
    {
      id: 4,
      title: 'Hackathon Patrocinado EcoSolutions',
      description: 'Crie soluções sustentáveis para problemas ambientais reais e concorra a um prêmio de R$10.000.',
      type: 'sponsored',
      prize: 'R$ 10.000',
      startDate: '2023-10-05',
      endDate: '2023-11-05',
      participants: 37,
      status: 'completed',
      company: 'EcoSolutions',
      tags: ['Sustentabilidade', 'Green Tech', 'Energia Renovável']
    },
    {
      id: 5,
      title: 'Hackathon Colaborativo Saúde',
      description: 'Participe do desenvolvimento de soluções para melhorar a saúde pública com participação compartilhada nos resultados.',
      type: 'collaborative',
      prize: 'Participação no Projeto',
      startDate: '2023-10-10',
      endDate: '2023-11-10',
      participants: 24,
      status: 'completed',
      company: null,
      tags: ['Saúde', 'Telemedicina', 'Bem-estar']
    },
    {
      id: 6,
      title: 'Hackathon Investidor-Dev EdTech',
      description: 'Desenvolva uma solução educacional inovadora com possibilidade de parceria com investidor do setor.',
      type: 'investor-dev',
      prize: 'R$ 3.000 + Parceria',
      startDate: '2023-12-01',
      endDate: '2024-01-01',
      participants: 0,
      status: 'upcoming',
      company: null,
      tags: ['Educação', 'EdTech', 'E-learning']
    },
  ];
  
  // Filtragem de hackathons baseada nos filtros selecionados
  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          hackathon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hackathon.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === 'all' || hackathon.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || hackathon.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  // Funções auxiliares para exibição
  const getStatusLabel = (status) => {
    switch (status) {
      case 'active': return 'Em andamento';
      case 'completed': return 'Finalizado';
      case 'upcoming': return 'Em breve';
      default: return status;
    }
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600';
      case 'completed': return 'text-gray-600';
      case 'upcoming': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };
  
  const getTypeLabel = (type) => {
    switch (type) {
      case 'sponsored': return 'Patrocinado';
      case 'collaborative': return 'Colaborativo';
      case 'investor-dev': return 'Investidor-Dev';
      default: return type;
    }
  };
  
  const getTypeColor = (type) => {
    switch (type) {
      case 'sponsored': return 'bg-verdant-green';
      case 'collaborative': return 'bg-sky-teal';
      case 'investor-dev': return 'bg-pumpkin-orange';
      default: return 'bg-gray-600';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-midnight-navy">Hackathons</h1>
        <Link 
          to="/hackathons/create" 
          className="btn btn-primary"
        >
          Criar Hackathon
        </Link>
      </div>
      
      {/* Barra de pesquisa e filtros */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar hackathons, tags, empresas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
            />
          </div>
          
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="md:w-auto w-full flex items-center justify-center gap-2 btn btn-outline"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            Filtros
          </button>
        </div>
        
        {/* Painel de filtros colapsável */}
        {isFiltersOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Hackathon
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green p-2"
              >
                <option value="all">Todos os tipos</option>
                <option value="sponsored">Patrocinado</option>
                <option value="collaborative">Colaborativo</option>
                <option value="investor-dev">Investidor-Desenvolvedor</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green p-2"
              >
                <option value="all">Todos os status</option>
                <option value="active">Em andamento</option>
                <option value="completed">Finalizados</option>
                <option value="upcoming">Em breve</option>
              </select>
            </div>
          </div>
        )}
      </div>
      
      {/* Lista de hackathons */}
      {filteredHackathons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map(hackathon => (
            <div key={hackathon.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex justify-between">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${getTypeColor(hackathon.type)}`}>
                  {getTypeLabel(hackathon.type)}
                </span>
                <span className={`${getStatusColor(hackathon.status)}`}>
                  {getStatusLabel(hackathon.status)}
                </span>
              </div>
              
              <h3 className="font-bold mt-3 text-lg">{hackathon.title}</h3>
              <p className="mt-2 text-gray-600 text-sm line-clamp-2">{hackathon.description}</p>
              
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
              
              <div className="mt-3 flex flex-wrap gap-1">
                {hackathon.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-warm-cream text-midnight-navy rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-4">
                <Link 
                  to={`/hackathons/${hackathon.id}`}
                  className="block w-full btn btn-outline text-center"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card p-8">
          <p className="text-center text-gray-500">
            Nenhum hackathon encontrado para os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
};

export default HackathonList; 