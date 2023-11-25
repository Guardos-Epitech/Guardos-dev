import mongoose from 'mongoose';

export const imageSchema = new mongoose.Schema({
  gridFsId: mongoose.Schema.Types.ObjectId,
  filename: String,
  contentType: String,
  size: Number,
  uploadDate: Date,
});
