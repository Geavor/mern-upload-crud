import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dvwhlroa0',
  api_key: '363995486238922',
  api_secret: 'ioKHJF8r6dCcWEO4rRclktJEH6Q',
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'posts',
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
