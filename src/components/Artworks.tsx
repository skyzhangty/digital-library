import React from 'react';
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { imageUrl } from '../utils';
import { ArtworksPagination } from './ArtworksPagination';
import { useArtworks } from '../hooks/useArtworks';
import { Search } from './Search';

export function Artworks() {
  const { artworks, isLoading } = useArtworks();
  if (!artworks) {
    return <></>;
  }
  const { data, pagination } = artworks;
  if (data.length === 0) {
    return (
      <h4>
        No artwork found! <Link href="/">Go back</Link>
      </h4>
    );
  }
  return (
    <Box sx={{ margin: '1.25rem', padding: '2.5rem' }}>
      <Search />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                image={`${imageUrl(item.image_id)}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Artist: ${item.artist_display}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Date: ${item.date_display}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={`artworks/${item.id}`}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ArtworksPagination pagination={pagination} />
      <Backdrop open={isLoading}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Box>
  );
}
