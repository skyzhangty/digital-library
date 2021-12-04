import { ArtworkResponse, ArtworksResponse } from './models';

const BASE_URL = 'https://api.artic.edu/api/v1/artworks';
const SEARCH_URL = `${BASE_URL}/search`;
const fields =
  'id,title,image_id,artist_display,date_display,date_start,date_end,place_of_origin,dimensions,medium_display,credit_line,main_reference_number';

export function fetchArtworks(page: string = '1', search: string = '') {
  if (isNaN(+page)) {
    page = '1';
  }

  let params: { fields: string; page: string; q?: string } = {
    fields,
    page,
  };
  let url;
  if (search) {
    url = new URL(SEARCH_URL);
    params = { ...params, q: search };
  } else {
    url = new URL(BASE_URL);
    params = { ...params, page };
  }

  url.search = new URLSearchParams(params).toString();
  return fetch(url.toString()).then<ArtworksResponse>((res) => res.json());
}

export function fetchArtworkById(id: string | undefined) {
  if (!id) {
    return Promise.reject();
  }
  const params = { fields };
  const url = new URL(`${BASE_URL}/${id}`);
  url.search = new URLSearchParams(params).toString();
  return fetch(url.toString()).then<ArtworkResponse>((res) => res.json());
}
