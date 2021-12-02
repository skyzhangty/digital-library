import React from 'react';
import './App.css';
import { Artworks } from './components/Artworks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ScrollToTop } from './components/ScrollToTop';
import { Artwork } from './components/Artwork';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/artworks/:id" element={<Artwork />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/" element={<Artworks />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
