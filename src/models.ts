import { MakeGenerics } from 'react-location';

export interface Artwork {
  id: number;
  title: string;
  image_id: string | null;
  artist_display: string;
  date_display: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface ArtworksResponse {
  data: Artwork[];
  pagination: Pagination;
  config: {
    iiif_url: string;
  };
}

export const emptyArtworksResponse: ArtworksResponse = {
  data: [],
  pagination: {
    total: 0,
    limit: 0,
    offset: 0,
    total_pages: 0,
    current_page: 0,
    next_url: '',
  },
  config: {
    iiif_url: '',
  },
};

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    artworks: ArtworksResponse;
  };
}>;
