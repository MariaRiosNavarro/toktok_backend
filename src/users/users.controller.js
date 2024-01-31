import { User } from './users.model.js';
import { Testuser } from '../tests/test.model.js';

export const updateUser = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  const user = ['der echte user'];
  try {
    res.json(user);
  } catch (err) {
    // next(err);
  }
  res.end();
};

export const getUsers = async (req, res, next) => {
  try {
    res.end();
  } catch (err) {
    next(err);
  }
};

export const mockNewUser = async (req, res) => {
  const testuser = new Testuser({ name: 'Testuser 2 aus mockNewUser' });
  // const testuser = new Testuser(req.body);
  try {
    await testuser.save();
    res.status(201).json(testuser);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};

export const mockgetUser = async (req, res) => {
  const user = ['der echte gemockte user'];
  const users = await Testuser.find();
  try {
    res.json(user, users);
  } catch (error) {
    console.log('mockgetUser error: ', error);
    res.status(500).end();
  }
};
