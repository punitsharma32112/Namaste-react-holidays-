const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
const stripe = Stripe("sk_test_YourSecretKey"); // Replace with your Stripe secret key

app.use(cors()); // Allow requests from the frontend
app.use(express.json()); // Parse JSON bodies

// Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Food Order", // Dynamic product name if required
            },
            unit_amount: req.body.amount * 100, // Convert to paise
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success", // Redirect after successful payment
      cancel_url: "http://localhost:3000/cancel",  // Redirect after cancellation
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
