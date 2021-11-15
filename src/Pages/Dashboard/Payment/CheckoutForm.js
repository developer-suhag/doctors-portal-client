import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const { _id, patientName, email, price } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axios
      .post("https://still-wave-56250.herokuapp.com/create-payment-intent", {
        price,
      })
      .then((result) => {
        setClientSecret(result.data?.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
      setSuccess("");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully");
      console.log(paymentIntent);
      setProcessing(false);

      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        // transaction: paymentIntent.client_secret.slice("_secret")[0],
        transaction: paymentIntent.id,
      };

      axios
        .put(
          `https://still-wave-56250.herokuapp.com/appointments/${_id}`,
          payment
        )
        .then((result) => {
          console.log(result);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress color="secondary" />
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay {price}
          </button>
        )}
      </form>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
    </div>
  );
};

export default CheckoutForm;
