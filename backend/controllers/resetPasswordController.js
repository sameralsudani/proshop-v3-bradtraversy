import asyncHandler from '../middleware/asyncHandler.js';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';

// @desc    Reset Password
// @route   POST /api/resetPassword
// @access  public
const resetPassword = asyncHandler(async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({ Status: 'Error with token' });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          UserModel.findByIdAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ Status: 'Success' }))
            .catch((err) => res.send({ Status: err }));
        })
        .catch((err) => res.send({ Status: err }));
    }
  });
});

export { resetPassword };
