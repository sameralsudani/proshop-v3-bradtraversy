import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';

import bookRoutes from './routes/bookRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import payRoutes from './routes/payRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import forgotPasswordRoutes from './routes/forgotPasswordRoutes.js';
import resetPasswordRoutes from './routes/resetPasswordRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { v2 as cloudinary } from 'cloudinary';

const port = process.env.PORT || 5000;

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/books', bookRoutes);
app.use('/api/subs', subscriptionRoutes);
app.use('/api/order', payRoutes);
app.use('/api/clubs', articleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/forgotPassword', forgotPasswordRoutes);
app.use('/api/resetPassword/', resetPasswordRoutes);

app.use('/api/order/checkout/webhook', express.raw({ type: '*/*' }));

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static('/var/data/uploads'));
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
