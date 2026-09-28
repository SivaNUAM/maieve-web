import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  return (
    <BrowserRouter>
      <NeighborhoodProvider>
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
      </NeighborhoodProvider>
    </BrowserRouter>
  );
};

export default App;
