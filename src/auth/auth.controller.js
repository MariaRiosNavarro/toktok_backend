import { User } from '../users/users.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createError } from '../middleware/error.js';
import { createToken, createNumericalCode } from './auth.service.js';
import { sendEmail } from '../config/email.config.js';

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

    let sixDigitode = createNumericalCode(6);

    let template = {
      from: '"Toktok Admin" <admin@gmail.com>',
      to: email,
      subject: 'pls verify your email',
      text: `hello user, please enter the six digit code on toktok to verify your email and proceed with the registration: ${sixDigitode}`,
      html: `<h2>hello user,</h2> <p>please enter the six digit code on toktok to verify your email and proceed with the registration:<b>${sixDigitode}</b> </p> `,
    };

    sendEmail(template);

    const payload = { code: sixDigitode, email: email, password: password };
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
  if (codeInput === code) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email,
        password: hash,
        salt,
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
      message: 'token expired. please sign up again.',
    });
    return next(createError(401, 'Token expired '));
  }
};

//$ login ---------------------------------------------------------------------

export const login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log({ user });
    if (!user) return next(createError(404, 'User not found'));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or username'));

    const payload = { id: user._id, role: user.role };
    const token = createToken(payload, '1h');

    const { password, role, ...otherDetails } = user._doc;
    console.log('user._doc:', user._doc);

    res
      .cookie('toktok', token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
