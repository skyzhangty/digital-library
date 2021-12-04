import React from 'react';
import './App.css';
import { Artworks } from './components/Artworks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Artwork } from './components/Artwork';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/artworks/:id" element={<Artwork />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/" element={<Artworks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
