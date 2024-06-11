import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    restaurantName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
