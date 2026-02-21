import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorizedNav from './components/CategorizedNav';
import About from './components/About';
import EduSkills from './components/EduSkills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import IeeeProject from './components/IeeeProject';
import SplitzyProject from './components/SplitzyProject';
import GraphicDesignProject from './components/GraphicDesignProject';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect /null to /
  useEffect(() => {
    if (location.pathname === '/null' || location.pathname === '/undefined') {
      navigate('/', { replace: true });
    }
  }, [location.pathname, navigate]);

  const getVariant = () => {
    if (location.pathname === '/ieee') return 'ieee';
    if (location.pathname === '/splitzy') return 'splitzy';
    if (location.pathname === '/graphic') return 'graphic';
    return 'home';
  };

  const NAV_BG = {
    home: 'bg-cream',
    ieee: 'bg-[#008DD5]',
    splitzy: 'bg-[#009E5F]',
    graphic: 'bg-dark',
  };

  const variant = getVariant();
  const handleSelectProject = (projectId) => {
    if (!projectId || projectId === 'home') {
      navigate('/');
    } else {
      navigate(`/${projectId}`);
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col bg-cream">
      <Navbar onSelectProject={handleSelectProject} navBg={NAV_BG[variant]} />
      <div className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="flex flex-col">
                <Hero onSelectProject={handleSelectProject} />
                <CategorizedNav />
                <About />
                <EduSkills />
                <Projects onSelectProject={handleSelectProject} />
              </div>
            } 
          />
          <Route path="/ieee" element={<IeeeProject onBack={() => navigate('/')} />} />
          <Route path="/splitzy" element={<SplitzyProject onBack={() => navigate('/')} />} />
          <Route path="/graphic" element={<GraphicDesignProject onBack={() => navigate('/')} />} />
        </Routes>
      </div>
      <Footer variant={variant} />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
