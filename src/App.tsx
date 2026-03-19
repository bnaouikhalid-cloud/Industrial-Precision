import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Interventions from './pages/Interventions';
import Technicians from './pages/Technicians';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        
        <main className="flex-1 p-8 pt-24 overflow-x-hidden">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'interventions' && <Interventions />}
          {currentPage === 'technicians' && <Technicians />}
          {/* Fallback for un-implemented pages */}
          {['clients', 'settings'].includes(currentPage) && (
            <div className="flex items-center justify-center h-full text-on-surface-variant font-medium">
              Page under construction
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
