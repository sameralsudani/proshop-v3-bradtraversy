import mongoose from 'mongoose';

const articleSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    stripeCustomerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
