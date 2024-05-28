import asyncHandler from '../middleware/asyncHandler.js';
import { stripe } from '../utils/stripe.js';
import User from '../models/userModel.js';
import Article from '../models/articleModel.js';

// @desc    Fetch all Articles
// @route   GET /api/subs/articles
// @access  private
const getArticles = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.user.email });

  const subscriptions = await stripe.subscriptions.list(
    {
      customer: user?.stripeCustomerId,
      status: 'all',
      expand: ['data.default_payment_method'],
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  if (!subscriptions.data.length) return res.json([]);

  //@ts-ignore
  const plan = subscriptions.data[0].plan.nickname;

  if (plan === 'Basic') {
    const articles = await Article.find({ access: 'Basic' });
    return res.json(articles);
  } else if (plan === 'Standard') {
    const articles = await Article.find({
      access: { $in: ['Basic', 'Standard'] },
    });
    return res.json(articles);
  } else {
    const articles = await Article.find({});
    return res.json(articles);
  }

  res.json(plan);
});

export { getArticles };
