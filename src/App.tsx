import React from 'react';
import './App.css';
import { Artworks } from './components/Artworks';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Artworks />
      </div>
    </QueryClientProvider>
  );
}

export default App;
