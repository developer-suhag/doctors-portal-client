import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  bgcolor: "#1CC7C1",
                  color: "#fff",
                  display: "flex",
                  gap: 2,
                  py: 3,
                  px: 2,
                  borderRadius: 2,
                }}
              >
                <Box>
                  <AccessTimeIcon sx={{ fontSize: 60 }} />
                </Box>
                <Box>
                  <Typography variant="h5">Opening Hours</Typography>
                  <Typography variant="body1">8AM - 4PM</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  bgcolor: "#3A4256",
                  color: "#fff",
                  display: "flex",
                  gap: 2,
                  py: 3,
                  px: 2,
                  borderRadius: 2,
                }}
              >
                <Box>
                  <RoomIcon sx={{ fontSize: 60 }} />
                </Box>
                <Box>
                  <Typography variant="h5">Visit our location</Typography>
                  <Typography variant="body1">
                    Brooklyn, NY 10036, United States
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  bgcolor: "#1CC7C1",
                  color: "#fff",
                  display: "flex",
                  gap: 2,
                  py: 3,
                  px: 2,
                  borderRadius: 2,
                }}
              >
                <Box>
                  <PhoneInTalkIcon sx={{ fontSize: 60 }} />
                </Box>
                <Box>
                  <Typography variant="h5">Contact us now</Typography>
                  <Typography variant="body1">+000 123 456789</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Info;
