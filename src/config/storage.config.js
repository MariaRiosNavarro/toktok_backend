import multer from 'multer';
import cloudinary from 'cloudinary';
import mongoose from 'mongoose';

// Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Multer
export const upload = multer({ storage: new multer.memoryStorage() });

// Mongoose
export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS_URI);
    console.log('Connect to MongoDB');
  } catch (error) {
    throw error;
  }
};
// Connection watch for MongoDB
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});
