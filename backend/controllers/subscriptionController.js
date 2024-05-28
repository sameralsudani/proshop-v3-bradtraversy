import asyncHandler from '../middleware/asyncHandler.js';
import { stripe } from '../utils/stripe.js';
import User from '../models/userModel.js';

// @desc    Fetch all Subscriptions
// @route   GET /api/subs/prices
// @access  private
const getSubscriptions = asyncHandler(async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

// @desc    Create Stripe Session
// @route   POST /api/subs/prices
// @access  private
const createSession = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.user.email });

  const session = await stripe.checkout.sessions.create(
    {
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: 'https://proshop-v3-bradtraversy.onrender.com/clubs/article',
      cancel_url: 'https://proshop-v3-bradtraversy.onrender.com/clubs/plans',
      customer: user?.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

export { getSubscriptions, createSession };
