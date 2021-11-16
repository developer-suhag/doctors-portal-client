import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, image } = doctor;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5">{name}</Typography>
        <img
          style={{ width: "100%" }}
          src={`data:image/png;base64,${image}`}
          alt=""
        />
      </Paper>
    </Grid>
  );
};

export default Doctor;
