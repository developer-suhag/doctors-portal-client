import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctrs] = useState([]);
  useEffect(() => {
    axios
      .get("https://still-wave-56250.herokuapp.com/doctors")
      .then((result) => {
        setDoctrs(result.data);
      });
  }, []);
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Our Doctors : {doctors.length}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Doctors;
