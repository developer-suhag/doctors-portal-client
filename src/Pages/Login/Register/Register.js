import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, authError, handleRegister, authSuccess, isLoading } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...loginData };
    newValue[field] = value;
    setLoginData(newValue);
  };
  const handleEmailRegister = (e) => {
    const { email, password, password2 } = loginData;
    if (password !== password2) {
      alert("Password Not matched");
      return;
    }
    handleRegister(email, password);
    e.preventDefault();
    e.target.reset();
  };
  return (
    <>
      <Container sx={{ py: 2 }}>
        <Grid sx={{ alignItems: "center" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ textAlign: "center", mb: 4 }} variant="h5">
              Register
            </Typography>
            <form onSubmit={handleEmailRegister}>
              <TextField
                required
                type="email"
                name="email"
                sx={{ mb: 2 }}
                variant="standard"
                fullWidth
                label="Your Email"
                onChange={handleOnChange}
              ></TextField>
              <TextField
                required
                type="password"
                name="password"
                sx={{ mb: 2 }}
                variant="standard"
                fullWidth
                label="Your Password"
                onChange={handleOnChange}
              ></TextField>
              <TextField
                required
                type="password"
                name="password2"
                sx={{ mb: 2 }}
                variant="standard"
                fullWidth
                label="Re Enter Password"
                onChange={handleOnChange}
              ></TextField>
              <Button
                type="submit"
                sx={{ my: 2, width: 1 }}
                variant="contained"
              >
                Register
              </Button>
              {isLoading && <CircularProgress />}
              {authSuccess && (
                <Alert severity="success">Register successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <Link style={{ color: "#222" }} to="/login">
              Already Register? Login
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
