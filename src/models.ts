import { Artwork } from './components/Artwork';

export interface Artwork {
  id: number;
  title: string;
  image_id: string | null;
  artist_display: string;
  date_display: string;
  date_start: string;
  date_end: string;
  place_of_origin: string;
  dimensions: string;
  medium_display: string;
  credit_line: string;
  main_reference_number: string;
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
}

export interface ArtworkResponse {
  data: Artwork;
  pagination: Pagination;
}