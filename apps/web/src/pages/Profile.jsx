import React, { useState } from 'react';
import { UserCircleIcon, PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  // Mock data para desenvolvimento
  const [user, setUser] = useState({
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@email.com',
    bio: 'Desenvolvedor Full Stack com experiência em React, Node.js e Python. Entusiasta de hackathons e projetos open source.',
    githubUsername: 'joaosilva',
    linkedinUrl: 'https://linkedin.com/in/joaosilva',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX'],
    avatar: null
  });
  
  const [badges, setBadges] = useState([
    { id: 1, name: 'Pioneiro do HackTank', description: 'Um dos primeiros 100 usuários da plataforma', icon: '🚀', date: '2023-10-15' },
    { id: 2, name: 'Criador Iniciante', description: 'Criou seu primeiro hackathon', icon: '✨', date: '2023-11-05' }
  ]);
  
  const [hackathonHistory, setHackathonHistory] = useState([
    { 
      id: 1, 
      title: 'Hackathon Patrocinado TechCorp', 
      date: '2023-11-15', 
      role: 'Participante', 
      result: 'Finalista', 
      teamName: 'Code Wizards',
      projectName: 'Smart Assistant' 
    },
    { 
      id: 2, 
      title: 'Hackathon Colaborativo FinTech', 
      date: '2023-10-10', 
      role: 'Criador', 
      result: 'Organizador', 
      teamName: null,
      projectName: null 
    }
  ]);
  
  // Estado para controlar a edição
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({...user});
  const [newSkill, setNewSkill] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  
  // Funções para edição de perfil
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddSkill = () => {
    if (newSkill.trim() && !editedUser.skills.includes(newSkill.trim())) {
      setEditedUser(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };
  
  const handleRemoveSkill = (skillToRemove) => {
    setEditedUser(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };
  
  const handleSaveProfile = () => {
    setUser(editedUser);
    setEditing(false);
  };
  
  const handleCancelEdit = () => {
    setEditedUser({...user});
    setEditing(false);
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-midnight-navy">Perfil</h1>
      
      {/* Tabs de navegação */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-verdant-green text-verdant-green'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Perfil
          </button>
          
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'hackathons'
                ? 'border-verdant-green text-verdant-green'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Hackathons
          </button>
          
          <button
            onClick={() => setActiveTab('badges')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'badges'
                ? 'border-verdant-green text-verdant-green'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Conquistas
          </button>
        </nav>
      </div>
      
      {/* Conteúdo da tab Perfil */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avatar e informações básicas */}
          <div className="md:col-span-1">
            <div className="card text-center">
              <div className="mb-4 flex justify-center">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-32 h-32 rounded-full object-cover" 
                  />
                ) : (
                  <UserCircleIcon className="w-32 h-32 text-gray-400" />
                )}
              </div>
              
              <h2 className="text-xl font-bold text-midnight-navy">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              
              {!editing && (
                <button
                  onClick={() => setEditing(true)}
                  className="mt-4 btn btn-outline flex items-center justify-center mx-auto"
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Editar Perfil
                </button>
              )}
            </div>
          </div>
          
          {/* Formulário de detalhes */}
          <div className="md:col-span-2">
            <div className="card">
              <h3 className="font-bold text-lg text-midnight-navy mb-6">
                {editing ? 'Editar Informações' : 'Informações do Perfil'}
              </h3>
              
              {editing ? (
                // Formulário de edição
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Biografia
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows="3"
                      value={editedUser.bio}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="githubUsername" className="block text-sm font-medium text-gray-700 mb-1">
                        GitHub Username
                      </label>
                      <input
                        type="text"
                        id="githubUsername"
                        name="githubUsername"
                        value={editedUser.githubUsername}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn URL
                      </label>
                      <input
                        type="text"
                        id="linkedinUrl"
                        name="linkedinUrl"
                        value={editedUser.linkedinUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Habilidades
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                        placeholder="Adicionar habilidade"
                      />
                      <button
                        type="button"
                        onClick={handleAddSkill}
                        className="px-4 py-2 bg-verdant-green text-white rounded-r-md hover:bg-deep-evergreen"
                      >
                        Adicionar
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {editedUser.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-warm-cream text-midnight-navy"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-1 text-gray-500 hover:text-red-500"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="btn btn-outline flex items-center"
                    >
                      <XMarkIcon className="h-4 w-4 mr-1" />
                      Cancelar
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="btn btn-primary flex items-center"
                    >
                      <CheckIcon className="h-4 w-4 mr-1" />
                      Salvar
                    </button>
                  </div>
                </div>
              ) : (
                // Visualização de detalhes
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Biografia</h4>
                    <p className="mt-1">{user.bio || 'Nenhuma biografia fornecida.'}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {user.githubUsername && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">GitHub</h4>
                        <a 
                          href={`https://github.com/${user.githubUsername}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-1 text-verdant-green hover:text-deep-evergreen"
                        >
                          {user.githubUsername}
                        </a>
                      </div>
                    )}
                    
                    {user.linkedinUrl && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">LinkedIn</h4>
                        <a 
                          href={user.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-1 text-verdant-green hover:text-deep-evergreen"
                        >
                          Perfil LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Habilidades</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {user.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-warm-cream text-midnight-navy"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Conteúdo da tab Hackathons */}
      {activeTab === 'hackathons' && (
        <div className="card">
          <h3 className="font-bold text-lg text-midnight-navy mb-4">Histórico de Hackathons</h3>
          
          {hackathonHistory.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hackathon
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Função
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resultado
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {hackathonHistory.map((hackathon) => (
                    <tr key={hackathon.id}>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{hackathon.title}</div>
                        {hackathon.teamName && (
                          <div className="text-sm text-gray-500">
                            Equipe: {hackathon.teamName}
                            {hackathon.projectName && ` | Projeto: ${hackathon.projectName}`}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(hackathon.date).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {hackathon.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          hackathon.result === 'Vencedor' ? 'bg-green-100 text-green-800' :
                          hackathon.result === 'Finalista' ? 'bg-blue-100 text-blue-800' :
                          hackathon.result === 'Organizador' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {hackathon.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center py-8 text-gray-500">
              Você ainda não participou de nenhum hackathon.
            </p>
          )}
        </div>
      )}
      
      {/* Conteúdo da tab Badges */}
      {activeTab === 'badges' && (
        <div className="card">
          <h3 className="font-bold text-lg text-midnight-navy mb-6">Conquistas e Medalhas</h3>
          
          {badges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map(badge => (
                <div key={badge.id} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <div className="text-3xl mr-4">{badge.icon}</div>
                  <div>
                    <h4 className="font-bold text-midnight-navy">{badge.name}</h4>
                    <p className="text-sm text-gray-600 my-1">{badge.description}</p>
                    <p className="text-xs text-gray-500">
                      Conquistada em: {new Date(badge.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-gray-500">
              Você ainda não conquistou nenhuma medalha.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;