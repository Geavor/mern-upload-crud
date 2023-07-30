import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/posts.controllers.js';

const router = Router();

router.get('/posts', getPosts);

router.get('/posts/:id', getPost);

router.post('/posts', createPost);

router.patch('/posts/:id', updatePost);

router.delete('/posts/:id', deletePost);

export default router;
