import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Paper } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jvw1LGITY56CrX5VJRHNFpXy4tLNzFhkN82MDTtAmbCqy2wMlk7IfoxiDMyckwgqIZkI8B7MVzObX86W2qnMdaF00GELkrPsc"
);

const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    axios
      .get(`https://still-wave-56250.herokuapp.com/appointments/${id}`)
      .then((result) => {
        setAppointment(result.data);
      });
  }, [id]);
  return (
    <Paper sx={{ p: 4 }}>
      <h3>Please pay for: {appointment.serviceName}</h3>
      <p>Amount: $ {appointment.price}</p>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </Paper>
  );
};

export default Payment;
