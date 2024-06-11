import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

const router = express.Router();
import {
  getBooks,
  getBookById,
  getBooksByCategory,
  createBook,
  updateBook,
  deleteBook,
  createBookReview,
  getTopBooks,
} from '../controllers/bookController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router
  .route('/')
  .get(getBooks)
  .post(protect, admin, upload.single('imageFile'), createBook);
router.route('/:id/reviews').post(protect, checkObjectId, createBookReview);
router.get('/top', getTopBooks);
router.route('/:category/:pageNumber').get(getBooksByCategory);

router
  .route('/:id')
  .get(checkObjectId, getBookById)
  .put(protect, admin, upload.single('imageFile'), updateBook)
  .delete(protect, admin, checkObjectId, deleteBook);

export default router;
