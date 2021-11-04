import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import treatment from "../../../images/treatment.png";

const ExceptionalDental = () => {
  return (
    <>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={6}>
              <img
                style={{ width: "100%", height: "70%" }}
                src={treatment}
                alt=""
              />
            </Grid>
            <Grid sx={{ mt: 6 }} item xs={4} sm={4} md={6}>
              <Typography sx={{ my: 2 }} variant="h4">
                Exceptional Dental Care, on Your Terms
              </Typography>
              <Typography sx={{ my: 4 }} variant="body2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page{" "}
              </Typography>
              <Button sx={{ bgcolor: "#19D3AE" }} variant="contained">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ExceptionalDental;
