import { User } from '../users/users.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/middleware/error.middleware.js';
import {
  createToken,
  createNumericalCode,
  createDefaultUsername,
} from './auth.service.js';
import { sendEmail } from '../config/email.config.js';
import { verifyEmailTemplate as template } from '../utils/templates/email.templates.js';
import _ from 'lodash';

//$ signUp ------------------------------------------------------------------

export const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: 'email already in database' });
    }

    let sixDigitCode = createNumericalCode(6);

    sendEmail(template(email, sixDigitCode));

    const payload = { code: sixDigitCode, email: email, password: password };
    const token = createToken(payload, '5min');

    res
      .cookie('toktok_verifyemail', token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ payload });
    // der code wird hier im response gesendet was natürlich falsch ist,
    // aber so könnt ihr auf den code zugreifen um ihn für die Registrierung einzugeben
  } catch (err) {
    next(err);
  }
};

//$ register ------------------------------------------------------------------

export const register = async (req, res, next) => {
  const { email, password, code } = req.payload;
  const { codeInput } = req.body;
  const username = createDefaultUsername();

  if (codeInput === code) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email,
        password: hash,
        salt,
        username,
      });

      await newUser.save();
      res.status(201).send('User has been created');
    } catch (err) {
      console.log('register error:', err);
      next(err);
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'invalid token',
    });
    return next(createError(401, 'Token expired or invalid'));
  }
};

//$ login ---------------------------------------------------------------------

export const login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log('user:', user.email);
    if (!user) return next(createError(404, 'User not found'));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or username'));

    const payload = {
      _id: user._id,
      email: user.email,
      role: user.role,
      birthday: user.birthday,
      telephone: user.telephone,
    };
    const token = createToken(payload, '1h');

    const { password, role, ...otherDetails } = user._doc;
    const data = _.pick(user, [
      '_id',
      'username',
      'img',
      'name',
      'job',
      'description',
      'website',
      'posts',
      'followers',
      'following',
      'favorites',
    ]);

    console.log({ payload });
    console.log({ data });
    res
      .cookie('toktok', token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({
        success: true,
        message: 'Login successful',
        data: data,
      });
  } catch (err) {
    next(err);
  }
};
