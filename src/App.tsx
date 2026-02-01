import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { Umrah } from './pages/Umrah';
import { Journal } from './pages/Journal';
import { useState, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';
import { Flights } from './pages/Flights';
import { Login } from './pages/Login';
import { Packages } from './pages/Packages';
import { PackageDetails } from './pages/PackageDetails';

import { MobileNav } from './components/layout/MobileNav';
import { Chatbot } from './components/features/Chatbot';
import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-gold/30 hover:cursor-default cursor-none">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/umrah" element={<Umrah />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Privacy />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </main>
      <MobileNav />
      <Chatbot />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
