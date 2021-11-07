import { Container, Grid } from "@mui/material";
import * as React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Calendar date={date} setDate={setDate}></Calendar>
        </Grid>
        <Grid xs={12} md={6}>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;
