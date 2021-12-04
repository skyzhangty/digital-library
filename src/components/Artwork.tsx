import React from 'react';
import { useArtwork } from '../hooks/useArtwork';
import { Grid, Typography } from '@mui/material';
import { imageUrl } from '../utils';

export function Artwork() {
  const artwork = useArtwork();
  if (!artwork) {
    return <></>;
  }
  const { data } = artwork;

  return (
    <Grid container sx={{ margin: '1.25rem', padding: '1.25rem' }}>
      <Grid item xs>
        <img src={`${imageUrl(data.image_id)}`} alt={data.title} />
      </Grid>
      <Grid item xs>
        <Grid
          container
          component="dl"
          spacing={{ xs: 2, md: 3 }}
          direction="column"
          sx={{ margin: '1.25rem', padding: '1.25rem' }}
        >
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Title
            </Typography>
            <Typography component="dd" variant="body2">
              {data.title}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Artist
            </Typography>
            <Typography component="dd" variant="body2">
              {data.artist_display}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Place of Origin
            </Typography>
            <Typography component="dd" variant="body2">
              {data.place_of_origin}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Date Start
            </Typography>
            <Typography component="dd" variant="body2">
              {data.date_start}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Date End
            </Typography>
            <Typography component="dd" variant="body2">
              {data.date_end}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Dimensions
            </Typography>
            <Typography component="dd" variant="body2">
              {data.dimensions}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Medium
            </Typography>
            <Typography component="dd" variant="body2">
              {data.medium_display}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Credit Line
            </Typography>
            <Typography component="dd" variant="body2">
              {data.credit_line}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography component="dt" variant="h6">
              Main Reference Number
            </Typography>
            <Typography component="dd" variant="body2">
              {data.main_reference_number}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
