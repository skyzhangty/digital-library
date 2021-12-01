import React from 'react';
import './App.css';
import { Artworks } from './components/Artworks';
import { ReactLocation, Router } from 'react-location';
import { fetchArtworks } from './apis';

const reactLocation = new ReactLocation();

function App() {
  return (
    <Router
      location={reactLocation}
      routes={[
        {
          path: '/',
          element: <Artworks />,
          loader: async () => ({
            artworks: await fetchArtworks(),
          }),
        },
      ]}
    />
  );
}

export default App;
