import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(58,66,86,.9)",
  backgroundBlendMode: "darken, luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
          item
          xs={12}
          md={7}
        >
          <Box>
            <Typography sx={{ my: 1, color: "#5FC7C7" }} variant="h5">
              APPOINTMENT
            </Typography>
            <Typography
              sx={{ my: 2, fontWeight: 700, color: "#fff" }}
              variant="h4"
            >
              Make an appointment Today
            </Typography>
            <Typography sx={{ my: 4, color: "#fff" }} variant="body2">
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looking at its
            </Typography>
            <Button sx={{ bgcolor: "#19D3AE" }} variant="contained">
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
