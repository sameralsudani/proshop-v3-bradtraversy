import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    title: { type: String },
    rating: { type: Number },
    comment: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
    },
    imageLink: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    pages: {
      type: Number,
      required: true,
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
    vender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
