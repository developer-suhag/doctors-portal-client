import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Testimonial.css";
import author1 from "../../../images/people-1.png";
import author2 from "../../../images/people-2.png";
import author3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <>
      <Container sx={{ py: 6, mt: 2 }}>
        <Box className="testimonials">
          <Typography sx={{ color: "#6ACECE" }} variant="subtitle1">
            TESTIMONIAL
          </Typography>
          <Typography sx={{ my: 2 }} variant="h4">
            What’s Our Patients Says
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={6} md={4}>
              <Paper sx={{ py: 4, px: 3 }}>
                <Typography variant="body2">
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using ‘Content here, content
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  <img style={{ width: 70 }} src={author1} alt="" />
                  <Box>
                    <Typography sx={{ color: "#5FC7C7" }} variant="h6">
                      Winson Herry
                    </Typography>
                    <Typography variant="caption">California</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={4} sm={6} md={4}>
              <Paper sx={{ py: 4, px: 3 }}>
                <Typography variant="body2">
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using ‘Content here, content
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  <img style={{ width: 70 }} src={author2} alt="" />
                  <Box>
                    <Typography sx={{ color: "#5FC7C7" }} variant="h6">
                      Winson Herry
                    </Typography>
                    <Typography variant="caption">California</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={4} sm={6} md={4}>
              <Paper sx={{ py: 4, px: 3 }}>
                <Typography variant="body2">
                  It is a long established fact that by the readable content of
                  a lot layout. The point of using Lorem a more-or-less normal
                  distribu to using ‘Content here, content
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  <img style={{ width: 70 }} src={author3} alt="" />
                  <Box>
                    <Typography sx={{ color: "#5FC7C7" }} variant="h6">
                      Winson Herry
                    </Typography>
                    <Typography variant="caption">California</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Testimonial;
