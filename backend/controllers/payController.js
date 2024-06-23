import asyncHandler from '../middleware/asyncHandler.js';
import { stripe } from '../utils/stripe.js';

// @desc    Create Stripe Session
// @route   POST /api/stripe/create-checkout-session
// @access  private
const createSession = asyncHandler(async (req, res) => {
  const items = req.body.cartItems.map((item) => {
    return {
      title: item.title,
      qty: item.qty,
      price: item.price,
      _id: item._id,
    };
  });

  const customer = await stripe.customers.create(
    {
      metadata: {
        userId: req.body.userId.toString(),
        cart: JSON.stringify(items),
      },
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: [item.imageLink],
          description: item.description,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qty,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ['card'],
        shipping_address_collection: {
          allowed_countries: ['US', 'CA', 'KE'],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 0,
                currency: 'usd',
              },
              display_name: 'Free shipping',
              // Delivers between 5-7 business days
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 5,
                },
                maximum: {
                  unit: 'business_day',
                  value: 7,
                },
              },
            },
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: {
                amount: 1500,
                currency: 'usd',
              },
              display_name: 'Next day air',
              // Delivers in exactly 1 business day
              delivery_estimate: {
                minimum: {
                  unit: 'business_day',
                  value: 1,
                },
                maximum: {
                  unit: 'business_day',
                  value: 1,
                },
              },
            },
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        line_items,
        mode: 'payment',
        metadata: {
          userId: req.body.userId.toString(),
          cart: JSON.stringify(items),
        },
        customer: customer.id,
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    );

    if (!session.url) {
      return res.status(500).json({ message: 'Error creating stripe session' });
    }

    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.raw.message });
  }
});

export { createSession };
