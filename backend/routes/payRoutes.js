import express from 'express';
const router = express.Router();
import { createSession } from '../controllers/payController.js';
import { protect } from '../middleware/authMiddleware.js';
import { stripe } from '../utils/stripe.js';
import Order from '../models/orderModel.js';

router.route('/create-checkout-session').post(protect, createSession);

// Stripe webhook
router.post(
  '/checkout/webhook',
  express.json({ type: 'application/json' }),
  async (req, res) => {
    let data;
    let eventType;

    // Check if webhook signing is configured.
    let webhookSecret;
    //webhookSecret = process.env.STRIPE_WEB_HOOK;

    if (webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers['stripe-signature'];

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed:  ${err}`);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data.object;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the checkout.session.completed event
    if (eventType === 'checkout.session.completed') {
      stripe.customers
        .retrieve(data.customer, {
          apiKey: process.env.STRIPE_SECRET_KEY,
        })
        .then(async (customer) => {
          try {
            createOrder(customer, data);
          } catch (err) {
            console.log(typeof createOrder);
            console.log(err);
          }
        })
        .catch((err) => console.log(err.message));
    }

    res.status(200).end();
  }
);

// Create order function
const createOrder = async (customer, data) => {
  const newOrder = new Order({
    user: data.metadata.userId,
    status: 'paid',
    orderItems: JSON.parse(customer.metadata.cart).map((item) => {
      return {
        title: item.title,
        qty: item.qty,
        price: item.price,
        book: item._id,
      };
    }),
    paymentMethod: 'Card',
  });

  try {
    const savedOrder = await newOrder.save();
    console.log('Processed Order:', savedOrder);
    // Send en email to the customer with savedOrder
  } catch (err) {
    console.log(err);
  }
};

export default router;
