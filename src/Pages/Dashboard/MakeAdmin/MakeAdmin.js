import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    // axios.put(
    //   "http://localhost:5000/users/admin",
    //   { headers: { Authorization: `Bearer ${token}` } },
    //   user
    // );
    axios({
      method: "put",
      url: "https://still-wave-56250.herokuapp.com/users/admin",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: user,
    }).then((result) => {
      console.log(result);
      if (result.data?.modifiedCount > 0) {
        alert("done");
        e.target.reset();
      }
    });
    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Make an admin
      </Typography>
      <Box sx={{ width: "50%", margin: "auto" }}>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            onBlur={handleEmailChange}
            fullWidth
            variant="standard"
            label="User Email"
            type="email"
          />
          <Box sx={{ textAlign: "center", my: 2 }}>
            <Button type="submit" variant="contained">
              Make Admin
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default MakeAdmin;
