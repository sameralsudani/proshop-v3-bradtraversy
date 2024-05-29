import express from 'express';
const router = express.Router();
import { resetPassword } from '../controllers/resetPasswordController.js';

router.route('/:id/:token').post(resetPassword);

export default router;
