import * as express from 'express';
import { saveImageToDB } from '../controllers/imageController';
const router = express.Router();
router.get('/', async (_req, res) => {
  return res.status(200)
    .send('Get Images');
});

router.post('/', async (_req, res) => {
  try {
    const base64: string = _req.body.image.base64;
    const filename: string = _req.body.image.filename;
    const contentType: string = _req.body.image.contentType;
    const size: number = _req.body.image.size;
    if (!base64 || !filename || !contentType || !size) {
      return res.status(404)
        .send('Post Images failed: ' + base64 + filename + contentType + size);
    }
    await saveImageToDB(filename, contentType,  size, base64);
  } catch (e) {
    console.error(e);
    return res.status(404)
      .send('Post Images failed');
  }
  return res.status(200)
    .send('Post Images successfully');
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
