import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>('');

  useEffect(() => setSearch(searchParams.get('search') || ''), [searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.currentTarget.value);

  const handleClick = () => {
    setSearchParams({ search });
  };

  return (
    <Grid container sx={{ marginBottom: '1.25rem' }} spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={10}>
        <TextField
          label="Search"
          fullWidth
          value={search}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          onClick={handleClick}
          variant="contained"
          disabled={!search}
          sx={{ height: '100%', width: '75%' }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
