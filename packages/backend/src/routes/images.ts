import * as express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import { imageSchema } from '../models/imageInterfaces';

router.get('/', async (_req, res) => {
  return res.status(200)
    .send('Get Images');
});

router.post('/', async (_req, res) => {
  const body = _req.body;
  try {
    const newImage = await mongoose.model('Image', imageSchema)
      .create(body);
    await newImage.save();
    return res.status(200)
      .send('Post Images');
  } catch (e) {
    console.error(e);
    return res.status(400)
      .send('Error');
  }
});

router.delete('/:name', async (_req, res) => {
  return res.status(200)
    .send('Delete Images');
});

router.put('/:name', async (_req, res) => {
  return res.status(200)
    .send('Put Images');
});

export default router;
