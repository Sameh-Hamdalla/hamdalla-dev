import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/nav/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import AIConsultant from "./components/Services/AIConsultant";
import Contact from "./components/kontakt/Contact";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop";

import Impressum from "./components/pages/impressum";
import Datenschutz from "./components/pages/datenschutz";

import "./components/Services/ai-consultant.css";

const App: React.FC = () => {
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);

  const openConsultant = () => {
    setIsConsultantOpen(true);
  };

  const closeConsultant = () => {
    setIsConsultantOpen(false);
  };

  const [showHint, setShowHint] = useState(true);

  return (
    <div className="app-shell">
      <Header />
      <ScrollToTop />

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onOpenConsultant={openConsultant} />
                <Services />
                <Portfolio />
                <Contact />
              </>
            }
          />

          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>

      <Footer />

      <AIConsultant isOpen={isConsultantOpen} onClose={closeConsultant} />

      {!isConsultantOpen && (
        <button
          type="button"
          onClick={openConsultant}
          className="ai-open-button"
          aria-label="KI Berater öffnen"
          title="KI Berater öffnen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;