import multer from 'multer';
import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import 'dotenv/config';

// Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

export async function uploadImage(buffer) {
  try {
    const uploadResult = await new Promise((resolve) => {
      cloudinary.v2.uploader
        .upload_stream({ folder: 'toktok' }, (error, result) => {
          if (error) {
            console.log(error);
          }
          return resolve(result);
        })
        .end(buffer);
    });
    return uploadResult;
  } catch (error) {
    console.error('cloudinary uploadImage error: ', error);
  }
}

export async function deleteImage(cloudinary_id) {
  //   console.log('deleteImage imageId:', imageId);
  try {
    const result = await cloudinary.v2.uploader.destroy(cloudinary_id);
    return result;
  } catch (error) {
    console.error('cloudinary deleteImage error: ', error);
  }
}

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
