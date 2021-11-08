import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appointments = ({ date }) => {
  const { user, token } = useAuth();
  const [userAppointments, setUserAppointments] = useState([]);
  useEffect(() => {
    // axios
    //   .get(
    //     `https://still-wave-56250.herokuapp.com/appointments?email=${user?.email}&date=${date}`
    //   )
    axios({
      method: "get",
      url: `https://still-wave-56250.herokuapp.com/appointments?email=${user?.email}&date=${date}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      setUserAppointments(result.data);
    });
  }, [user?.email, date, token]);
  return (
    <div>
      <h2>Appointment</h2>
      <TableContainer sx={{ my: 3 }} component={Paper}>
        <Table sx={{}} aria-label="Appointment table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userAppointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
