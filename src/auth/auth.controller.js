import { User } from '../users/users.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';

//$ register ------------------------------------------------------------------

export const register = async (req, res, next) => {
  try {
    const { email, username, name, password, telephone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: 'email already in database' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      username,
      name,
      password: hash,
      salt,
      telephone,
    });

    await newUser.save();
    res.status(201).send('User has been created');
  } catch (err) {
    next(err);
  }
};

//$ login ---------------------------------------------------------------------

export const login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log({ user });
    if (!user) return next(createError(404, 'User not found'));
    // kann man die message im frontend sehen? falls ja würde ich das ändern auf sowas wie 'login failed'

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or username'));

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    const { password, role, ...otherDetails } = user._doc;

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
