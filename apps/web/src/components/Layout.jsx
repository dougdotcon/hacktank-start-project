import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  PuzzlePieceIcon, 
  PlusCircleIcon, 
  UserCircleIcon, 
  WalletIcon, 
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Layout = ({ children, isAuthenticated, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Redirecionar para login se não estiver autenticado
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const navItems = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Hackathons', href: '/hackathons', icon: PuzzlePieceIcon },
    { name: 'Criar Hackathon', href: '/hackathons/create', icon: PlusCircleIcon },
    { name: 'Perfil', href: '/profile', icon: UserCircleIcon },
    { name: 'Carteira', href: '/wallet', icon: WalletIcon },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar para desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-midnight-navy text-white">
        <div className="p-4 flex items-center">
          <img src="/src/assets/logo.png" alt="HackTank Logo" className="h-10 mr-2" />
          <h1 className="text-xl font-bold">HackTank</h1>
        </div>
        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center px-4 py-2 rounded-lg hover:bg-sky-teal hover:text-midnight-navy transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button
            onClick={onLogout}
            className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-coral-red transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
            Sair
          </button>
        </div>
      </aside>

      {/* Mobile header and sidebar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-midnight-navy text-white">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src="/src/assets/logo.png" alt="HackTank Logo" className="h-8 mr-2" />
            <h1 className="text-lg font-bold">HackTank</h1>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-midnight-navy pt-16 text-white">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center px-4 py-2 rounded-lg hover:bg-sky-teal hover:text-midnight-navy transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setSidebarOpen(false);
                    onLogout();
                  }}
                  className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-coral-red transition-colors"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-64 mt-16 md:mt-0 p-4 md:p-8 bg-warm-cream">
        {children}
      </main>
    </div>
  );
};

export default Layout; 