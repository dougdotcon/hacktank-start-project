import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-verdant-green">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-midnight-navy">Página não encontrada</h2>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Ops! Parece que você está tentando acessar uma página que não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Voltar para a página inicial
          </Link>
        </div>
        <div className="mt-6">
          <img 
            src="/src/assets/logo.png" 
            alt="HackTank Logo" 
            className="h-32 mx-auto opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
