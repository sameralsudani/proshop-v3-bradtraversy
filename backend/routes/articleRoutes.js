import express from 'express';
const router = express.Router();
import { getArticles } from '../controllers/articleController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/articles').get(protect, getArticles);

export default router;
