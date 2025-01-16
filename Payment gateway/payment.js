import React from "react";
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe public key from environment variables
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = ({ totalAmount }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      // Log the payment request for debugging purposes
      console.log("Creating Stripe Checkout session...");

      // Create Checkout Session directly with Stripe from frontend
      const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`, // Use secret key in request header
        },
        body: new URLSearchParams({
          payment_method_types: "card",
          line_items: JSON.stringify([
            {
              price_data: {
                currency: "inr",
                product_data: {
                  name: "Food Order", // Replace with dynamic product name if needed
                },
                unit_amount: totalAmount * 100, // Convert to paise (in cents)
              },
              quantity: 1,
            },
          ]),
          mode: "payment",
          success_url: "http://localhost:3000/success", // Redirect after successful payment
          cancel_url: "http://localhost:3000/cancel",  // Redirect after cancellation
        }),
      }).then((res) => res.json());

      // Log the session data to check if it's successful
      console.log("Session created successfully:", response);

      // Redirect to the Stripe-hosted Checkout page
      const result = await stripe.redirectToCheckout({
        sessionId: response.id,
      });

      if (result.error) {
        console.error("Error during checkout redirect:", result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout session creation:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-xl font-semibold mb-4">Complete Your Payment</h2>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600"
      >
        Pay ₹{totalAmount}
      </button>
    </div>
  );
};

export default Payment;
