import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

const App: React.FC = () => {
  const [ready, setReady] = useState(false);

  return (
    <BrowserRouter>
      <NeighborhoodProvider>
        <AnimatePresence>
          {!ready && <Loader key="maeive-loader" onDone={() => setReady(true)} />}
        </AnimatePresence>
        {ready && (
          <>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col">
              <Navbar />

              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/recipes" element={<RecipePage />} />
                  <Route path="/plants" element={<PlantsPage />} />
                  <Route path="/marketplace" element={<MarketplacePage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>

              <Footer />
            </div>
          </>
        )}
      </NeighborhoodProvider>
    </BrowserRouter>
  );
};

export default App;
