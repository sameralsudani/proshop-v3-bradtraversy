import asyncHandler from '../middleware/asyncHandler.js';
import Book from '../models/bookModel.js';
import cloudinary from 'cloudinary';

// @desc    Fetch all Books
// @route   GET /api/Books
// @access  Public
const getBooks = asyncHandler(async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Book.countDocuments({ ...keyword });
  const books = await Book.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ books, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single book
// @route   GET /api/books/:id
// @access  Public
const getBookById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.

  const book = await Book.findById(req.params.id);
  if (book) {
    return res.json(book);
  } else {
    // NOTE: this will run if a valid ObjectId but no book was found
    // i.e. book may be null
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Fetch  books by category
// @route   GET /api/books/:category/:pageNmuner
// @access  Public
const getBooksByCategory = asyncHandler(async (req, res) => {
  const { category, pageNumber } = req.params;
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(pageNumber) || 1;
  if (category !== 'shopAllproducts') {
    const count = await Book.countDocuments({
      category: category,
    });
    const books = await Book.find({
      category: category,
    })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ books, page, pages: Math.ceil(count / pageSize) });
  } else {
    const count = await Book.countDocuments();
    const books = await Book.find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ books, page, pages: Math.ceil(count / pageSize) });
  }
});

// @desc    Create a book
// @route   POST /api/books
// @access  Private/Admin
const createBook = asyncHandler(async (req, res) => {
  try {
    const book = new Book({
      user: req.body.userId,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      countInStock: req.body.countInStock,
      pages: req.body.pages,
      author: req.body.author,
      vender: req.body.vender,
    });

    if (req.file) {
      const imageLink = await uploadImage(req.file);
      book.imageLink = imageLink;
    }

    await book.save();
    res.status(200).send(book);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private/Admin
const updateBook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    book.title = req.body.title;
    book.price = req.body.price;
    book.description = req.body.description;
    book.category = req.body.category;
    book.countInStock = req.body.countInStock;
    book.pages = req.body.pages;
    book.author = req.body.author;
    book.vender = req.body.vender;

    if (req.file) {
      const imageLink = await uploadImage(req.file);
      book.imageLink = imageLink;
    }

    await book.save();
    res.status(200).send(book);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Admin
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    await book.deleteOne({ _id: book._id });
    res.json({ message: 'Book removed' });
  } else {
    res.status(404);
    throw new Error('book not found');
  }
});

// @desc    Create new review
// @route   POST /api/books/:id/reviews
// @access  Private
const createBookReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const book = await Book.findById(req.params.id);

  if (book) {
    const alreadyReviewed = book.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Pook already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    book.reviews.push(review);

    book.numReviews = book.reviews.length;

    book.rating =
      book.reviews.reduce((acc, item) => item.rating + acc, 0) /
      book.reviews.length;

    await book.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Book not found');
  }
});

// @desc    Get top rated books
// @route   GET /api/books/top
// @access  Public
const getTopBooks = asyncHandler(async (req, res) => {
  const books = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(books);
});

const uploadImage = async (file) => {
  const image = file;
  const base64Image = Buffer.from(image.buffer).toString('base64');
  const dataURI = `data:${image.mimetype};base64,${base64Image}`;
  const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
  return uploadResponse.url;
};

export {
  getBooks,
  getBookById,
  getBooksByCategory,
  createBook,
  updateBook,
  deleteBook,
  createBookReview,
  getTopBooks,
};
