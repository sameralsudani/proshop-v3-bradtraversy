import express from 'express';
const router = express.Router();
import {
  getSubscriptions,
  createSession,
} from '../controllers/subscriptionController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/prices').get(protect, getSubscriptions);
router.route('/session').post(protect, createSession);

export default router;
