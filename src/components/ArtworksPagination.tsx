import { Grid, Pagination } from '@mui/material';
import React from 'react';
import { Pagination as PaginationModel } from '../models';
import { useSearchParams } from 'react-router-dom';

export function ArtworksPagination(props: { pagination: PaginationModel }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { total_pages } = props.pagination;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  return (
    <Grid container justifyContent="center">
      <Pagination
        sx={{ marginBottom: '2rem' }}
        count={total_pages}
        page={+page}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </Grid>
  );
}
