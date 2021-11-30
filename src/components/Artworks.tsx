import React from 'react';
import { useArtworks } from '../hooks/useArtworks';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { imageUrl } from '../utils';

export function Artworks() {
  const { data, config } = useArtworks();
  return (
    <Grid
      container
      sx={{ padding: 10 }}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.map((item) => (
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              image={`${imageUrl(config.iiif_url, item.image_id)}`}
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
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}