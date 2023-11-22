import * as express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import fs from 'fs';

import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', async (_req, res) => {
  return res.status(200)
    .send('Get Images');
});

router.post('/:name', upload.single('image'), async (req, res) => {
  try {
    console.log('req.file:', req.file);
    // @ts-ignore
    const gfs = new Grid(mongoose.connection.db, mongoose.mongo);
    const writeStream = gfs.createWriteStream({
      filename: req.file.originalname,
      mode: 'w',
      // eslint-disable-next-line camelcase
      content_type: req.file.mimetype,
    });
    fs.createReadStream(req.file.path)
      .pipe(writeStream);

    // @ts-ignore
    writeStream.on('close', (file) => {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
        return res.json({ file });
      });
    });
  } catch (err) {
    console.error('Error Details:', JSON.stringify(err, null, 2));
    return res.status(400)
      .json({ message: 'Error uploading file', error: err });
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
