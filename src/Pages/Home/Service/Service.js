import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Service = ({ service }) => {
  const { serviceName, description, img } = service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0, py: 2 }}>
        <CardMedia
          sx={{ width: 70, mx: "auto" }}
          component="img"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {serviceName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
