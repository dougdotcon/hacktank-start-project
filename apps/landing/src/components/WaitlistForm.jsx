import React, { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !name) {
      setError('Por favor, preencha todos os campos');
      setLoading(false);
      return;
    }

    // Validação de e-mail básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido');
      setLoading(false);
      return;
    }

    try {
      // Chamada para API
      const response = await fetch('http://localhost:3001/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar dados');
      }
      
      console.log('Resposta da API:', data);
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error('Erro ao enviar dados:', err);
      setError(err.message || 'Erro ao enviar dados. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  return (
    <section id="cadastro" className="py-16 bg-midnight-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Entre na Waitlist</h2>
          <p className="text-lg mb-8">
            Seja o primeiro a experimentar a plataforma de hackathons gamificados mais inovadora do mercado.
          </p>

          {submitted ? (
            <div className="bg-verdant-green bg-opacity-20 p-6 rounded-lg">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-2">Inscrição realizada com sucesso!</h3>
              <p>
                Obrigado por se juntar à nossa waitlist. Você receberá novidades em breve no e-mail cadastrado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-left mb-2 font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-midnight-navy border border-sky-teal focus:outline-none focus:ring-2 focus:ring-sky-teal"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-left mb-2 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-midnight-navy border border-sky-teal focus:outline-none focus:ring-2 focus:ring-sky-teal"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-coral-red bg-opacity-30 rounded-lg text-white">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-pumpkin-orange hover:bg-coral-red text-white font-bold py-3 px-6 rounded-lg transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Enviando...' : 'Quero participar'}
              </button>
              
              <p className="mt-4 text-sm text-gray-300">
                Ao se inscrever, você concorda em receber comunicações sobre o HackTank.
                Não enviaremos spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm; 