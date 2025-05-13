import React, { useState } from 'react';
import { 
  CurrencyDollarIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  PaperAirplaneIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Wallet = () => {
  // Mock data para desenvolvimento
  const [walletInfo, setWalletInfo] = useState({
    id: 1,
    userId: 1,
    balance: 300,
    currencySymbol: 'HC',
    createdAt: '2023-09-01'
  });
  
  const [transactions, setTransactions] = useState([
    { 
      id: 1, 
      type: 'credit', 
      amount: 100, 
      description: 'Bônus de cadastro', 
      fromUser: null, 
      toUser: 1, 
      date: '2023-09-01T10:00:00',
      status: 'completed'
    },
    { 
      id: 2, 
      type: 'debit', 
      amount: 50, 
      description: 'Transferência para @mariasilva', 
      fromUser: 1, 
      toUser: 2, 
      date: '2023-10-12T15:30:00',
      status: 'completed'
    },
    { 
      id: 3, 
      type: 'credit', 
      amount: 250, 
      description: 'Prêmio por participação no Hackathon TechCorp', 
      fromUser: null, 
      toUser: 1, 
      date: '2023-11-05T18:15:00',
      status: 'completed'
    }
  ]);
  
  // Estado para o modal de transferência
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferForm, setTransferForm] = useState({
    recipient: '',
    amount: '',
    description: ''
  });
  const [transferErrors, setTransferErrors] = useState({});
  const [isTransferring, setIsTransferring] = useState(false);
  
  // Manipular mudanças no formulário de transferência
  const handleTransferChange = (e) => {
    const { name, value } = e.target;
    setTransferForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro ao digitar
    if (transferErrors[name]) {
      setTransferErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validar e enviar formulário de transferência
  const handleTransfer = async () => {
    const errors = {};
    let isValid = true;
    
    // Validações básicas
    if (!transferForm.recipient.trim()) {
      errors.recipient = 'O destinatário é obrigatório';
      isValid = false;
    }
    
    if (!transferForm.amount || isNaN(transferForm.amount) || parseInt(transferForm.amount) <= 0) {
      errors.amount = 'Digite um valor válido maior que zero';
      isValid = false;
    } else if (parseInt(transferForm.amount) > walletInfo.balance) {
      errors.amount = 'Saldo insuficiente para esta transferência';
      isValid = false;
    }
    
    setTransferErrors(errors);
    
    if (isValid) {
      try {
        setIsTransferring(true);
        
        // Simulação de transferência
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Atualizar saldo
        const transferAmount = parseInt(transferForm.amount);
        setWalletInfo(prev => ({
          ...prev,
          balance: prev.balance - transferAmount
        }));
        
        // Adicionar a nova transação
        const newTransaction = {
          id: Date.now(),
          type: 'debit',
          amount: transferAmount,
          description: transferForm.description || `Transferência para ${transferForm.recipient}`,
          fromUser: walletInfo.userId,
          toUser: Math.floor(Math.random() * 100) + 2, // id aleatório para mock
          date: new Date().toISOString(),
          status: 'completed'
        };
        
        setTransactions(prev => [newTransaction, ...prev]);
        
        // Fechar o modal e resetar o formulário
        setShowTransferModal(false);
        setTransferForm({
          recipient: '',
          amount: '',
          description: ''
        });
      } catch (error) {
        console.error('Erro ao processar transferência:', error);
      } finally {
        setIsTransferring(false);
      }
    }
  };
  
  // Formatar valor da moeda
  const formatCurrency = (value) => {
    return `${value} ${walletInfo.currencySymbol}`;
  };
  
  // Formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR') + ' às ' + date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-midnight-navy">Carteira</h1>
      
      {/* Cartão de saldo */}
      <div className="bg-gradient-to-r from-verdant-green to-deep-evergreen rounded-lg p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold opacity-90">Seu Saldo</h2>
            <p className="text-3xl font-bold mt-2">{formatCurrency(walletInfo.balance)}</p>
            <p className="text-sm opacity-80 mt-1">
              Carteira ativa desde {new Date(walletInfo.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <CurrencyDollarIcon className="h-8 w-8" />
          </div>
        </div>
        
        <button
          onClick={() => setShowTransferModal(true)}
          className="mt-4 bg-white text-verdant-green py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors hover:bg-opacity-90"
        >
          <PaperAirplaneIcon className="h-4 w-4 mr-2 rotate-45" />
          Transferir HC
        </button>
      </div>
      
      {/* Lista de transações */}
      <div className="card">
        <h2 className="text-xl font-bold text-midnight-navy mb-6">Histórico de Transações</h2>
        
        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map(transaction => (
              <div 
                key={transaction.id} 
                className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'credit' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'credit' 
                        ? <ArrowDownIcon className="h-5 w-5" /> 
                        : <ArrowUpIcon className="h-5 w-5" />
                      }
                    </div>
                    
                    <div>
                      <p className="font-medium text-midnight-navy">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
                    </div>
                  </div>
                  
                  <div className={`font-medium ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'} {formatCurrency(transaction.amount)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-6 text-gray-500">
            Nenhuma transação encontrada.
          </p>
        )}
      </div>
      
      {/* Modal de transferência */}
      {showTransferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-midnight-navy">Transferir HC</h2>
              <button 
                onClick={() => setShowTransferModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                  Destinatário*
                </label>
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  value={transferForm.recipient}
                  onChange={handleTransferChange}
                  placeholder="Nome de usuário ou email"
                  className={`w-full px-3 py-2 border rounded-md ${
                    transferErrors.recipient ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                />
                {transferErrors.recipient && (
                  <p className="mt-1 text-sm text-red-600">{transferErrors.recipient}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Valor (HC)*
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min="1"
                  max={walletInfo.balance}
                  value={transferForm.amount}
                  onChange={handleTransferChange}
                  placeholder="Quantidade de HC"
                  className={`w-full px-3 py-2 border rounded-md ${
                    transferErrors.amount ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-verdant-green`}
                />
                {transferErrors.amount ? (
                  <p className="mt-1 text-sm text-red-600">{transferErrors.amount}</p>
                ) : (
                  <p className="mt-1 text-sm text-gray-500">
                    Saldo disponível: {formatCurrency(walletInfo.balance)}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição (opcional)
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={transferForm.description}
                  onChange={handleTransferChange}
                  placeholder="Motivo da transferência"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-verdant-green"
                />
              </div>
              
              <div className="mt-6">
                <button
                  onClick={handleTransfer}
                  disabled={isTransferring}
                  className={`w-full btn btn-primary ${
                    isTransferring ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isTransferring ? 'Processando...' : 'Transferir'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Informações sobre HC */}
      <div className="bg-warm-cream rounded-lg p-6">
        <h3 className="font-bold text-lg text-midnight-navy mb-2">Sobre HackCoins (HC)</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            HackCoins (HC) são a moeda oficial do HackTank. Você pode usá-los para:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Criar novos hackathons (custo: 300 HC)</li>
            <li>Patrocinar projetos de outros usuários</li>
            <li>Investir em hackathons colaborativos</li>
            <li>Transferir para outros usuários</li>
          </ul>
          <p className="mt-2">
            Para ganhar mais HC, participe de hackathons, crie conteúdo técnico na plataforma ou receba transferências de outros usuários.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;