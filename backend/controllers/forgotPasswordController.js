import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

// @desc    forgot Password
// @route   POST /api/forgotPassword
// @access  public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ Status: 'User not existed' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    var mailOptions = {
      from: 'samerxxxalsudani@gmail.com',
      to: email,
      subject: 'Reset Password Link',
      text: `${process.env.CLIENT_URL}/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send({ Status: 'Success' });
      }
    });
  });
});

export { forgotPassword };
