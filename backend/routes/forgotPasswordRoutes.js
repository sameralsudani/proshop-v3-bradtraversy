import express from 'express';
const router = express.Router();
import { forgotPassword } from '../controllers/forgotPasswordController.js';

router.route('/').post(forgotPassword);

export default router;
