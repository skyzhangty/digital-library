import { fetchArtworks } from '../apis';
import { ArtworksResponse } from '../models';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useArtworks() {
  const [searchParams] = useSearchParams();
  const [artworks, setArtworks] = useState<ArtworksResponse | null>(null);
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';

  useEffect(() => {
    fetchArtworks(page, search).then(setArtworks);
  }, [page, search]);

  return artworks;
}
