import { Container, Grid } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {
          <Grid item xs={4} sm={4} md={4}>
            <h3>hello</h3>
          </Grid>
        }
      </Grid>
    </Container>
  );
};

export default Services;
