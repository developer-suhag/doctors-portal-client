import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Container className="contact-section" sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center", color: "#fff" }}>
          <Typography sx={{ color: "#5FC7C7", mb: 2 }} variant="subtitle1">
            CONTACT US
          </Typography>
          <Typography variant="h4">Always Connect with us </Typography>
        </Box>
        <Box sx={{ mt: 4, width: "50%", mx: "auto" }}>
          <form className="contact-form">
            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Name"
              id="fullWidth"
              variant="filled"
              size="small"
              color="info"
            />
            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Subject"
              id="fullWidth"
              variant="filled"
              size="small"
              color="info"
            />
            <TextField
              sx={{ mb: 2 }}
              fullWidth
              label="Message"
              id="fullWidth"
              variant="filled"
              size="small"
              color="info"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: "100%", bgcolor: "#19D3AE" }}
            >
              SUBMIT
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
