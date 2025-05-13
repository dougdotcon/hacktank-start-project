import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CheckCircleIcon, 
  ExclamationCircleIcon 
} from '@heroicons/react/24/outline';

const HackathonCreate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBargainModal, setShowBargainModal] = useState(false);
  const [bargainOption, setBargainOption] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'sponsored',
    startDate: '',
    endDate: '',
    registrationEndDate: '',
    submissionEndDate: '',
    prize: '',
    company: '',
    rules: '',
    tags: [],
    newTag: '',
  });
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpar erros ao digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Manipular adição de tags
  const handleAddTag = () => {
    if (formData.newTag.trim() !== '' && !formData.tags.includes(formData.newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.newTag.trim()],
        newTag: ''
      });
    }
  };
  
  // Remover tag
  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };
  
  // Validar cada etapa antes de avançar
  const validateStep = (currentStep) => {
    let stepErrors = {};
    let isValid = true;
    
    if (currentStep === 1) {
      if (!formData.title.trim()) {
        stepErrors.title = 'O título é obrigatório';
        isValid = false;
      }
      
      if (!formData.description.trim()) {
        stepErrors.description = 'A descrição é obrigatória';
        isValid = false;
      }
      
      if (!formData.type) {
        stepErrors.type = 'Selecione um tipo de hackathon';
        isValid = false;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.startDate) {
        stepErrors.startDate = 'A data de início é obrigatória';
        isValid = false;
      }
      
      if (!formData.endDate) {
        stepErrors.endDate = 'A data de término é obrigatória';
        isValid = false;
      }
      
      if (!formData.registrationEndDate) {
        stepErrors.registrationEndDate = 'A data de término das inscrições é obrigatória';
        isValid = false;
      }
      
      if (!formData.submissionEndDate) {
        stepErrors.submissionEndDate = 'A data de término das submissões é obrigatória';
        isValid = false;
      }
      
      // Validar que as datas fazem sentido cronologicamente
      if (formData.startDate && formData.endDate && new Date(formData.startDate) >= new Date(formData.endDate)) {
        stepErrors.endDate = 'A data de término deve ser posterior à data de início';
        isValid = false;
      }
      
      if (formData.registrationEndDate && formData.endDate && new Date(formData.registrationEndDate) > new Date(formData.endDate)) {
        stepErrors.registrationEndDate = 'As inscrições devem terminar antes do fim do hackathon';
        isValid = false;
      }
      
      if (formData.submissionEndDate && formData.endDate && new Date(formData.submissionEndDate) > new Date(formData.endDate)) {
        stepErrors.submissionEndDate = 'As submissões devem terminar antes do fim do hackathon';
        isValid = false;
      }
    }
    
    if (currentStep === 3) {
      if (!formData.prize.trim()) {
        stepErrors.prize = 'O prêmio é obrigatório';
        isValid = false;
      }
      
      if (formData.type === 'sponsored' && !formData.company.trim()) {
        stepErrors.company = 'A empresa patrocinadora é obrigatória para hackathons patrocinados';
        isValid = false;
      }
      
      if (!formData.rules.trim()) {
        stepErrors.rules = 'As regras são obrigatórias';
        isValid = false;
      }
      
      if (formData.tags.length === 0) {
        stepErrors.tags = 'Adicione pelo menos uma tag';
        isValid = false;
      }
    }
    
    setErrors(stepErrors);
    return isValid;
  };
  
  // Avançar para a próxima etapa
  const handleNextStep = () => {
    if (validateStep(step)) {
      if (step === 3) {
        // Antes de finalizar, mostrar modal de barganha
        setShowBargainModal(true);
      } else {
        setStep(step + 1);
      }
    }
  };
  
  // Voltar para a etapa anterior
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  
  // Fechar o modal de barganha
  const handleCloseBargainModal = () => {
    setShowBargainModal(false);
  };
  
  // Processar a opção de barganha e submeter o formulário
  const handleBargainSubmit = async () => {
    try {
      if (!bargainOption) {
        return; // Deve selecionar uma opção
      }
      
      setIsSubmitting(true);
      
      // Simulação de envio para o servidor
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirecionar para a página de hackathons após o sucesso
      navigate('/hackathons');
    } catch (error) {
      console.error('Erro ao criar hackathon:', error);
      setIsSubmitting(false);
    }
  };
  
  // Renderização condicional de cada etapa
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Informações Básicas</h2>
            
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Título do Hackathon*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                placeholder="Ex: Hackathon de Inovação Tecnológica"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição Curta*
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                placeholder="Descreva brevemente o objetivo do hackathon"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Hackathon*
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
              >
                <option value="sponsored">Patrocinado por Empresa</option>
                <option value="collaborative">Colaborativo de Investimento</option>
                <option value="investor-dev">Investidor-Desenvolvedor</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-red-600">{errors.type}</p>
              )}
              
              <div className="mt-2 bg-warm-cream p-3 rounded-md">
                <h3 className="font-medium text-midnight-navy">Sobre este tipo:</h3>
                {formData.type === 'sponsored' && (
                  <p className="text-sm text-gray-600 mt-1">
                    Uma empresa busca desenvolver uma solução específica e oferece prêmios para os vencedores.
                    Modelos de premiação incluem compartilhamento de participação ou aquisição total.
                  </p>
                )}
                {formData.type === 'collaborative' && (
                  <p className="text-sm text-gray-600 mt-1">
                    Grupo de investidores aportam capital em conjunto e o MVP vencedor recebe o investimento acumulado.
                    Todos os participantes recebem 20% de participação distribuída igualmente.
                  </p>
                )}
                {formData.type === 'investor-dev' && (
                  <p className="text-sm text-gray-600 mt-1">
                    Um investidor aporta capital para atrair desenvolvedores que criarão uma solução.
                    O investidor escolhe o vencedor que recebe o prêmio e continua trabalhando para desenvolver a ideia.
                  </p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Datas do Evento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Início*
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.startDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                />
                {errors.startDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Data de Término*
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.endDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                />
                {errors.endDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="registrationEndDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Término das Inscrições*
                </label>
                <input
                  type="date"
                  id="registrationEndDate"
                  name="registrationEndDate"
                  value={formData.registrationEndDate}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.registrationEndDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                />
                {errors.registrationEndDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.registrationEndDate}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="submissionEndDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Término das Submissões*
                </label>
                <input
                  type="date"
                  id="submissionEndDate"
                  name="submissionEndDate"
                  value={formData.submissionEndDate}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.submissionEndDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                />
                {errors.submissionEndDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.submissionEndDate}</p>
                )}
              </div>
            </div>
            
            <div className="bg-warm-cream p-4 rounded-md">
              <h3 className="font-medium text-midnight-navy mb-2">Dicas para as datas:</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>Dê tempo suficiente para inscrições (recomendamos pelo menos 2 semanas)</li>
                <li>O período de submissão deve terminar no máximo 1 dia antes do fim do hackathon</li>
                <li>Considere feriados e finais de semana para aumentar a participação</li>
                <li>Para hackathons mais complexos, considere um período de 4-6 semanas</li>
              </ul>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Prêmios e Detalhes</h2>
            
            <div>
              <label htmlFor="prize" className="block text-sm font-medium text-gray-700 mb-1">
                Prêmio/Recompensa*
              </label>
              <input
                type="text"
                id="prize"
                name="prize"
                value={formData.prize}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.prize ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                placeholder="Ex: R$ 10.000 ou Participação no Projeto"
              />
              {errors.prize && (
                <p className="mt-1 text-sm text-red-600">{errors.prize}</p>
              )}
            </div>
            
            {formData.type === 'sponsored' && (
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa Patrocinadora*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                  placeholder="Nome da empresa patrocinadora"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                )}
              </div>
            )}
            
            <div>
              <label htmlFor="rules" className="block text-sm font-medium text-gray-700 mb-1">
                Regras e Critérios de Avaliação*
              </label>
              <textarea
                id="rules"
                name="rules"
                value={formData.rules}
                onChange={handleChange}
                rows="5"
                className={`w-full px-3 py-2 border rounded-md ${errors.rules ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                placeholder="Descreva as regras, critérios de avaliação e qualquer outra informação importante"
              />
              {errors.rules && (
                <p className="mt-1 text-sm text-red-600">{errors.rules}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags (adicione pelo menos uma)*
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={formData.newTag}
                  onChange={(e) => setFormData({...formData, newTag: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                  placeholder="Ex: IA, Blockchain, Saúde"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-verdant-green text-white rounded-r-md hover:bg-deep-evergreen"
                >
                  Adicionar
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-warm-cream text-midnight-navy"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 text-gray-500 hover:text-red-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              
              {errors.tags && (
                <p className="mt-1 text-sm text-red-600">{errors.tags}</p>
              )}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  // Renderizar indicador de progresso
  const renderProgressBar = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div 
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? 'bg-verdant-green text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            1
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'bg-verdant-green' : 'bg-gray-200'}`}></div>
          <div 
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? 'bg-verdant-green text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            2
          </div>
          <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'bg-verdant-green' : 'bg-gray-200'}`}></div>
          <div 
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 3 ? 'bg-verdant-green text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            3
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>Informações</span>
          <span>Datas</span>
          <span>Detalhes</span>
        </div>
      </div>
    );
  };
  
  // Modal de barganha
  const renderBargainModal = () => {
    if (!showBargainModal) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 max-w-xl w-full mx-4">
          <h2 className="text-xl font-bold text-midnight-navy mb-4">Barganha Criativa</h2>
          
          <p className="text-gray-600 mb-6">
            Para criar um hackathon no HackTank, você precisa escolher uma das seguintes opções de barganha:
          </p>
          
          <div className="space-y-4">
            <div 
              className={`border rounded-lg p-4 cursor-pointer ${
                bargainOption === 'coins' ? 'border-verdant-green bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => setBargainOption('coins')}
            >
              <div className="flex items-start">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 ${
                  bargainOption === 'coins' ? 'bg-verdant-green text-white' : 'border border-gray-300'
                }`}>
                  {bargainOption === 'coins' && <CheckCircleIcon className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="font-medium">Gastar 300 HackCoins</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Utilize 300 HackCoins do seu saldo para criar este hackathon.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className={`border rounded-lg p-4 cursor-pointer ${
                bargainOption === 'article' ? 'border-verdant-green bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => setBargainOption('article')}
            >
              <div className="flex items-start">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 ${
                  bargainOption === 'article' ? 'bg-verdant-green text-white' : 'border border-gray-300'
                }`}>
                  {bargainOption === 'article' && <CheckCircleIcon className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="font-medium">Publicar um artigo técnico</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Escreva e publique um artigo técnico de pelo menos 800 palavras sobre um tema relevante para a comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCloseBargainModal}
              className="btn btn-outline"
            >
              Cancelar
            </button>
            
            <button
              type="button"
              onClick={handleBargainSubmit}
              disabled={!bargainOption || isSubmitting}
              className={`btn btn-primary ${
                isSubmitting || !bargainOption ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Criando...' : 'Criar Hackathon'}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/hackathons" className="inline-flex items-center text-verdant-green hover:text-deep-evergreen">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Voltar para Hackathons
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold text-midnight-navy mb-6">Criar Novo Hackathon</h1>
      
      {renderProgressBar()}
      
      <div className="card mb-6">
        {renderStep()}
      </div>
      
      <div className="flex justify-between">
        {step > 1 ? (
          <button 
            type="button" 
            onClick={handlePrevStep}
            className="btn btn-outline flex items-center"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Anterior
          </button>
        ) : (
          <div></div>
        )}
        
        <button 
          type="button" 
          onClick={handleNextStep}
          className="btn btn-primary flex items-center"
        >
          {step === 3 ? 'Finalizar' : 'Próximo'}
          {step < 3 && <ArrowRightIcon className="h-4 w-4 ml-1" />}
        </button>
      </div>
      
      {renderBargainModal()}
    </div>
  );
};

export default HackathonCreate; 