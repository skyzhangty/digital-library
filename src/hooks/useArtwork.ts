import { fetchArtworkById } from '../apis';
import { ArtworkResponse } from '../models';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useArtwork() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtworkResponse | null>(null);

  useEffect(() => {
    fetchArtworkById(id).then(setArtwork);
  }, [id]);

  return artwork;
}
