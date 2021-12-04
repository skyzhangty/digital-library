import { fetchArtworkById } from '../apis';
import { ArtworkResponse } from '../models';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from './useFetch';

export function useArtwork() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtworkResponse | null>(null);

  const isLoading = useFetch<ArtworkResponse>(
    () => fetchArtworkById(id),
    setArtwork,
    [id]
  );
  return { artwork, isLoading };
}
