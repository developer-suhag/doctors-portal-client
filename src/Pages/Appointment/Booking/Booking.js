import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={8} md={6} lg={4}>
        <Paper sx={{ py: 4, textAlign: "center" }} elevation={3}>
          <Typography
            sx={{ fontWeight: 700, color: "info.main" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            Book appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        bookingOpen={bookingOpen}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
        booking={booking}
        date={date}
      ></BookingModal>
    </>
  );
};

export default Booking;
