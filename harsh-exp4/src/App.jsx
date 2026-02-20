// ── App.jsx ───────────────────────────────────────────────────────────────
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Analytics from './pages/Analytics';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}
