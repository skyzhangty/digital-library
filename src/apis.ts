import { ArtworksResponse } from './models';

const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export function fetchArtworks() {
  const fields = 'id,title,image_id,artist_display,date_display';
  const params = { fields };
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams(params).toString();
  return fetch(url.toString()).then<ArtworksResponse>((res) => res.json());
}
