import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Loader from './components/common/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { NeighborhoodProvider } from './context/Neighborhood';
import ScrollToTop from './layouts/ScrollToTop';

import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import PlantsPage from './pages/PlantsPage';
import MarketplacePage from './pages/MarketplacePage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const ease = [0.22, 1, 0.36, 1] as const;

const PageFrame: React.FC = () => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={{ duration: reducedMotion ? 0 : 0.38, ease }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipes" element={<RecipePage />} />
                <Route path="/plants" element={<PlantsPage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [ready, setReady] = useState(false);

  return (
    <BrowserRouter>
      <NeighborhoodProvider>
        <AnimatePresence>
          {!ready && <Loader key="maeive-loader" onDone={() => setReady(true)} />}
        </AnimatePresence>
        {ready && <PageFrame />}
      </NeighborhoodProvider>
    </BrowserRouter>
  );
};

export default App;
