import { useQuery } from 'react-query';
import { ArtworksResponse, emptyArtworksResponse } from '../models';

export function useArtworks(): ArtworksResponse {
  const fields = 'id,title,image_id,artist_display,date_display';
  const { data } = useQuery<ArtworksResponse>('artworks', () =>
    fetch(`https://api.artic.edu/api/v1/artworks?fields=${fields}`).then(
      (res) => res.json()
    )
  );

  return data || emptyArtworksResponse;
}
