import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bannerBg = {
  background: `url(${bg})`,
};

const Banner = () => {
  return (
    <Container sx={{ py: 12 }}>
      <Box style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "left",
            }}
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography sx={{ my: 2, fontWeight: 700 }} variant="h4">
                Your New Smile Starts Here
              </Typography>
              <Typography sx={{ my: 4 }} variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the
              </Typography>
              <Button sx={{ bgcolor: "#19D3AE" }} variant="contained">
                Get appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: 400 }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
