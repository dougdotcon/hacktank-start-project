import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  UserGroupIcon, 
  TagIcon, 
  TrophyIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ArrowLeftIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const HackathonDetail = () => {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  
  // Mock data para desenvolvimento - em produção isso seria carregado da API
  const mockHackathons = [
    {
      id: "1",
      title: 'Hackathon Patrocinado TechCorp',
      description: 'Desenvolva soluções inovadoras para problemas reais da empresa TechCorp e concorra a prêmios de até R$15.000.',
      longDescription: `
        <p>A TechCorp está buscando soluções inovadoras para otimizar seus processos internos e melhorar a experiência de seus clientes.</p>
        
        <h3>Desafios:</h3>
        <ul>
          <li>Automatização de processos de atendimento ao cliente</li>
          <li>Implementação de IA para análise preditiva de dados</li>
          <li>Desenvolvimento de soluções sustentáveis para reduzir o impacto ambiental</li>
        </ul>
        
        <h3>Prêmios:</h3>
        <ul>
          <li>1º lugar: R$ 15.000 + possibilidade de contratação</li>
          <li>2º lugar: R$ 7.000</li>
          <li>3º lugar: R$ 3.000</li>
        </ul>
        
        <h3>Regras:</h3>
        <ul>
          <li>Equipes de até 5 pessoas</li>
          <li>Soluções devem ser funcionais e demonstráveis</li>
          <li>Submissões devem incluir código fonte e documentação</li>
          <li>Apresentação final de 5 minutos + 3 minutos para perguntas</li>
        </ul>
      `,
      type: 'sponsored',
      prize: 'R$ 15.000',
      startDate: '2023-11-15',
      endDate: '2023-12-15',
      participants: 42,
      registrationEndDate: '2023-12-01',
      submissionEndDate: '2023-12-14',
      status: 'active',
      company: 'TechCorp',
      companyLogo: 'https://via.placeholder.com/150',
      tags: ['IA', 'Machine Learning', 'Big Data'],
      mentors: [
        { id: 1, name: 'Carlos Silva', role: 'CTO da TechCorp', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { id: 2, name: 'Ana Ferreira', role: 'Head de Inovação', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
      ],
      submissions: [
        { id: 1, teamName: 'Tech Wizards', projectName: 'IA Customer Service', score: 92, status: 'submitted' },
        { id: 2, teamName: 'Data Miners', projectName: 'Análise Preditiva TechCorp', score: 88, status: 'submitted' },
        { id: 3, teamName: 'Green Code', projectName: 'EcoTech Solution', score: 85, status: 'submitted' }
      ]
    },
    {
      id: "2",
      title: 'Hackathon Colaborativo FinTech',
      description: 'Participe do desenvolvimento de uma solução financeira inovadora e tenha participação compartilhada no projeto final.',
      longDescription: `
        <p>Este hackathon colaborativo visa criar uma solução FinTech inovadora com participação compartilhada entre todos os participantes.</p>
        
        <h3>Objetivos:</h3>
        <ul>
          <li>Desenvolver uma plataforma descentralizada de empréstimos P2P</li>
          <li>Implementar sistema seguro de verificação de identidade</li>
          <li>Criar interfaces intuitivas para usuários finais</li>
        </ul>
        
        <h3>Modelo de Participação:</h3>
        <p>Todos os participantes receberão 20% de participação distribuída igualmente no projeto final. Os melhores contribuidores terão a oportunidade de continuar no desenvolvimento pós-hackathon.</p>
        
        <h3>Regras:</h3>
        <ul>
          <li>Código deve ser aberto e licenciado sob MIT</li>
          <li>Soluções devem priorizar segurança e privacidade</li>
          <li>Conformidade com regulações financeiras é obrigatória</li>
        </ul>
      `,
      type: 'collaborative',
      prize: 'Participação no Projeto',
      startDate: '2023-11-20',
      endDate: '2023-12-20',
      participants: 28,
      registrationEndDate: '2023-12-05',
      submissionEndDate: '2023-12-19',
      status: 'active',
      company: null,
      tags: ['Fintech', 'Blockchain', 'Pagamentos'],
      mentors: [
        { id: 3, name: 'Roberto Mendes', role: 'Especialista em Blockchain', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
        { id: 4, name: 'Juliana Costa', role: 'Product Designer', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' }
      ],
      submissions: [
        { id: 4, teamName: 'BlockChain Gang', projectName: 'P2PLoan', score: 90, status: 'submitted' },
        { id: 5, teamName: 'Crypto Coders', projectName: 'SecureID Finance', score: 85, status: 'submitted' }
      ]
    },
    {
      id: "3",
      title: 'Hackathon Investidor-Dev IoT',
      description: 'Um investidor busca desenvolvedores para criar um sistema IoT inovador com prêmio e possibilidade de parceria.',
      longDescription: `
        <p>Um investidor experiente do setor de IoT está buscando talentos para desenvolver uma solução inovadora de monitoramento ambiental com sensores de baixo custo.</p>
        
        <h3>Objetivo:</h3>
        <p>Criar um protótipo funcional de um sistema de monitoramento ambiental usando sensores IoT de baixo custo que possa ser implementado em áreas urbanas para coleta de dados sobre qualidade do ar, temperatura, umidade e ruído.</p>
        
        <h3>Prêmio e Parceria:</h3>
        <ul>
          <li>O vencedor receberá R$ 2.000 como prêmio imediato</li>
          <li>Possibilidade de parceria de longo prazo com o investidor</li>
          <li>Acesso a rede de contatos e mentoria por 6 meses</li>
        </ul>
        
        <h3>Critérios de Avaliação:</h3>
        <ul>
          <li>Viabilidade técnica e comercial</li>
          <li>Inovação e criatividade</li>
          <li>Qualidade do protótipo apresentado</li>
          <li>Escalabilidade da solução</li>
        </ul>
      `,
      type: 'investor-dev',
      prize: 'R$ 2.000 + Parceria',
      startDate: '2023-11-10',
      endDate: '2023-12-10',
      participants: 15,
      registrationEndDate: '2023-11-30',
      submissionEndDate: '2023-12-09',
      status: 'active',
      company: null,
      tags: ['IoT', 'Hardware', 'Sensores'],
      mentors: [
        { id: 5, name: 'Ricardo Almeida', role: 'Investidor IoT', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
        { id: 6, name: 'Marina Santos', role: 'Engenheira de Hardware', avatar: 'https://randomuser.me/api/portraits/women/14.jpg' }
      ],
      submissions: [
        { id: 6, teamName: 'SensorTech', projectName: 'AirQuality Monitor', score: 95, status: 'submitted' },
        { id: 7, teamName: 'IoT Makers', projectName: 'EcoSense', score: 90, status: 'submitted' },
        { id: 8, teamName: 'Bit Builders', projectName: 'UrbanSensor', score: 82, status: 'submitted' }
      ]
    }
  ];
  
  // Simular carregamento de dados do servidor
  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        setLoading(true);
        
        // Simulação de delay de rede
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const foundHackathon = mockHackathons.find(h => h.id === id);
        
        if (foundHackathon) {
          setHackathon(foundHackathon);
        } else {
          setError('Hackathon não encontrado');
        }
      } catch (err) {
        setError('Erro ao carregar dados do hackathon');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHackathon();
  }, [id]);
  
  // Função para formatar data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };
  
  // Função para registrar participação no hackathon
  const handleRegister = async () => {
    // Simulação de registro
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsRegistered(true);
  };
  
  // Estados de loading/erro
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-verdant-green"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="card p-8 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <Link to="/hackathons" className="btn btn-primary">
          Voltar para Hackathons
        </Link>
      </div>
    );
  }
  
  if (!hackathon) {
    return null;
  }

  // Renderizar componente
  return (
    <div>
      <div className="mb-6">
        <Link to="/hackathons" className="inline-flex items-center text-verdant-green hover:text-deep-evergreen">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Voltar para Hackathons
        </Link>
      </div>
    
      {/* Header do Hackathon */}
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs text-white ${
                hackathon.type === 'sponsored' ? 'bg-verdant-green' :
                hackathon.type === 'collaborative' ? 'bg-sky-teal' : 'bg-pumpkin-orange'
              }`}>
                {hackathon.type === 'sponsored' ? 'Patrocinado' :
                 hackathon.type === 'collaborative' ? 'Colaborativo' : 'Investidor-Dev'}
              </span>
              
              <span className={`px-3 py-1 rounded-full text-xs ${
                hackathon.status === 'active' ? 'bg-green-100 text-green-800' :
                hackathon.status === 'completed' ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {hackathon.status === 'active' ? 'Em andamento' :
                 hackathon.status === 'completed' ? 'Finalizado' : 'Em breve'}
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-midnight-navy">{hackathon.title}</h1>
            
            <p className="mt-2 text-gray-600">{hackathon.description}</p>
          </div>
          
          {!isRegistered ? (
            <button 
              onClick={handleRegister}
              className="btn btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
              Participar deste Hackathon
            </button>
          ) : (
            <div className="flex items-center gap-2 text-verdant-green bg-green-50 px-4 py-2 rounded-lg">
              <CheckCircleIcon className="h-5 w-5" />
              <span>Você está participando!</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Navegação por tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'details'
                ? 'border-verdant-green text-verdant-green'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Detalhes
          </button>
          
          <button
            onClick={() => setActiveTab('submissions')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'submissions'
                ? 'border-verdant-green text-verdant-green'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Submissões ({hackathon.submissions.length})
          </button>
          
          <button
            onClick={() => setActiveTab('mentors')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'mentors'
                ? 'border-verdant-green text-verdant-green'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Mentores ({hackathon.mentors.length})
          </button>
        </nav>
      </div>
      
      {/* Conteúdo das tabs */}
      {activeTab === 'details' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coluna da esquerda - Informações principais */}
          <div className="md:col-span-2 space-y-6">
            <div className="card">
              <h2 className="text-xl font-bold text-midnight-navy mb-4">Sobre este Hackathon</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: hackathon.longDescription }}
              />
            </div>
          </div>
          
          {/* Coluna da direita - Informações resumidas */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-lg text-midnight-navy mb-4">Informações</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <TrophyIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Prêmio</p>
                    <p className="text-gray-600">{hackathon.prize}</p>
                  </div>
                </div>
                
                {hackathon.company && (
                  <div className="flex items-start">
                    <BuildingOfficeIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Empresa</p>
                      <p className="text-gray-600">{hackathon.company}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <CalendarIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Período</p>
                    <p className="text-gray-600">
                      {formatDate(hackathon.startDate)} a {formatDate(hackathon.endDate)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Inscrições até</p>
                    <p className="text-gray-600">{formatDate(hackathon.registrationEndDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Submissões até</p>
                    <p className="text-gray-600">{formatDate(hackathon.submissionEndDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <UserGroupIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Participantes</p>
                    <p className="text-gray-600">{hackathon.participants}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TagIcon className="h-5 w-5 text-pumpkin-orange mt-0.5 mr-3" />
                  <div>
                    <p className="font-medium">Tags</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {hackathon.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-warm-cream text-midnight-navy rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'submissions' && (
        <div className="card">
          <h2 className="text-xl font-bold text-midnight-navy mb-6">Projetos Submetidos</h2>
          
          {hackathon.submissions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Equipe
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Projeto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avaliação
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {hackathon.submissions.map((submission) => (
                    <tr key={submission.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{submission.teamName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {submission.projectName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-verdant-green">{submission.score}/100</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Enviado
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-verdant-green hover:text-deep-evergreen">Ver detalhes</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center py-8 text-gray-500">
              Ainda não há submissões para este hackathon.
            </p>
          )}
        </div>
      )}
      
      {activeTab === 'mentors' && (
        <div className="card">
          <h2 className="text-xl font-bold text-midnight-navy mb-6">Mentores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathon.mentors.map((mentor) => (
              <div key={mentor.id} className="flex items-center p-4 bg-white rounded-lg border border-gray-100">
                <img 
                  src={mentor.avatar} 
                  alt={mentor.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-midnight-navy">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm">{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HackathonDetail; 