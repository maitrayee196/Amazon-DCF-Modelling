
import React, { useState } from 'react';
import { 
  OverviewSection, FinancialsSection, BalanceSheetSection, 
  RatioAnalyticsSection, DuPontSection, ValuationSection, 
  PeerSection 
} from './components/DashboardSections';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'financials', label: 'Financials' },
  { id: 'balance', label: 'Balance' },
  { id: 'ratios', label: 'Ratios' },
  { id: 'dupont', label: 'DuPont' },
  { id: 'valuation', label: 'Valuation' },
  { id: 'peers', label: 'Peers' },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection />;
      case 'financials': return <FinancialsSection />;
      case 'balance': return <BalanceSheetSection />;
      case 'ratios': return <RatioAnalyticsSection />;
      case 'dupont': return <DuPontSection />;
      case 'valuation': return <ValuationSection />;
      case 'peers': return <PeerSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans selection:bg-white/20 selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-500 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Real Amazon Logo - Using white SVG for monochrome look */}
            <div className="relative group flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                alt="Amazon" 
                className="h-7 w-auto object-contain filter brightness-0 invert" 
                style={{ imageRendering: 'high-quality' }}
              />
            </div>
            <div className="h-5 w-px bg-white/10 mx-1"></div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-white/95 leading-tight">Financial Intelligence Dashboard</span>
              <span className="text-[10px] uppercase tracking-widest text-textSecondary/60">Institutional Model • Nov 2025</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-textSecondary/70 border border-white/5 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse"></span>
            AMZN (NAS): $234.42
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex space-x-1 overflow-x-auto no-scrollbar py-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 text-xs font-medium transition-all duration-300 rounded-lg whitespace-nowrap tracking-wide
                    ${activeTab === tab.id ? 'text-white' : 'text-textSecondary hover:text-white hover:bg-white/5'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mx-2 rounded-full opacity-80"
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
