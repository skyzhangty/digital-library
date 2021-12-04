import { fetchArtworks } from '../apis';
import { ArtworksResponse } from '../models';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from './useFetch';

export function useArtworks() {
  const [searchParams] = useSearchParams();
  const [artworks, setArtworks] = useState<ArtworksResponse | null>(null);
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';

  const isLoading = useFetch<ArtworksResponse>(
    () => fetchArtworks(page, search),
    setArtworks,
    [page, search]
  );
  return { artworks, isLoading };
}
