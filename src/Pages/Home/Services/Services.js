import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    serviceName: "Fluoride Treatment",
    description:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
    img: fluoride,
  },
  {
    serviceName: "Cavity Filling",
    description:
      "Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know.",
    img: cavity,
  },
  {
    serviceName: "Teath Whitening",
    description:
      "It's never been easier to brighten your smile at home. There are all kinds of products you can try: rinses, gels, chewing gum, toothpastes, and strips.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Container sx={{ py: 6, textAlign: "center" }}>
      <Typography
        sx={{ textAlign: "center", my: 1, color: "#5FC7C7" }}
        variant="h5"
      >
        OUR SERVICES
      </Typography>
      <Typography
        sx={{ textAlign: "center", my: 2, fontWeight: 700 }}
        variant="h4"
      >
        Services We Provide
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
