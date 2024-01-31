import mongoose from 'mongoose';

const testuserSchema = new mongoose.Schema({
  name: String,
});

export const Testuser = mongoose.model('testuser', testuserSchema);
