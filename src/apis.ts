import { ArtworksResponse } from './models';

const BASE_URL = 'https://api.artic.edu/api/v1/artworks';

export function fetchArtworks(page: string = '1', search: string = '') {
  console.log(page);
  if (isNaN(+page)) {
    page = '1';
  }
  const fields = 'id,title,image_id,artist_display,date_display';
  const params = { fields, page, search };
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams(params).toString();
  return fetch(url.toString()).then<ArtworksResponse>((res) => res.json());
}
