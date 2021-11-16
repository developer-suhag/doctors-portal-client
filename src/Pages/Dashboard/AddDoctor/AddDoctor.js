import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://still-wave-56250.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("doctor added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box sx={{ width: "50%", margin: "auto " }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Add a Doctor
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          required
          fullWidth
          variant="standard"
          sx={{ mb: 2 }}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          required
          fullWidth
          variant="standard"
          sx={{ mb: 2 }}
        />
        <Input
          onChange={(e) => setImage(e.target.files[0])}
          fullWidth
          accept="image/*"
          type="file"
        />
        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Add Doctor
        </Button>
      </form>
    </Box>
  );
};

export default AddDoctor;
