import * as express from 'express';
import {saveImageToDB} from '../controllers/imageController';
const router = express.Router();
router.get('/', async (_req, res) => {
  return res.status(200)
    .send('Get Images');
});

router.post('/', async (_req, res) => {
  if (await saveImageToDB() === 'success') {
    return res.status(200)
      .send('Post Images successfully');
  } else {
    return res.status(404)
      .send('Post Images failed');
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
