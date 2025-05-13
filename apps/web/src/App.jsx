import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import HackathonList from './pages/HackathonList';
import HackathonCreate from './pages/HackathonCreate';
import HackathonDetail from './pages/HackathonDetail';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  // Estado de autenticação mockado para desenvolvimento
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login onLogin={login} />} />
      <Route path="/register" element={<Register onRegister={login} />} />
      
      {/* Rotas protegidas */}
      <Route 
        path="/" 
        element={
          <Layout isAuthenticated={isAuthenticated} onLogout={logout}>
            <Dashboard />
          </Layout>
        } 
      />
      <Route 
        path="/hackathons" 
        element={
          <Layout isAuthenticated={isAuthenticated} onLogout={logout}>
            <HackathonList />
          </Layout>
        } 
      />
      <Route 
        path="/hackathons/create" 
        element={
          <Layout isAuthenticated={isAuthenticated} onLogout={logout}>
            <HackathonCreate />
          </Layout>
        } 
      />
      <Route 
        path="/hackathons/:id" 
        element={
          <Layout isAuthenticated={isAuthenticated} onLogout={logout}>
            <HackathonDetail />
          </Layout>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <Layout isAuthenticated={isAuthenticated} onLogout={logout}>
            <Profile />
          </Layout>
        } 
      />
      <Route 
        path="/wallet" 
        element={
          <Layout isAuthenticated={isAuthenticated} onLogout={logout}>
            <Wallet />
          </Layout>
        } 
      />
      
      {/* Rota 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App; 