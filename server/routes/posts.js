import express from 'express';
import { createPost, getPosts, getPost, deletePost, updatePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// @route  POST api/posts
// @desc   Create A Post
// @access Public
router.post('/', createPost);

// @route  GET api/posts
// @desc   Get All Posts
// @access Public
router.get('/', getPosts);

// @route  GET api/posts/:id
// @desc   Get A Post
// @access Public
router.get('/:id', getPost);

// @route  DELETE api/posts/:id
// @desc   Delete A Post
// @access Public
router.delete('/:id', deletePost);

// @route  Patch api/posts/:id
// @desc   Update A Post
// @access Public
router.patch('/:id', updatePost);

// @route  Patch api/posts/:id
// @desc   Like A Post
// @access Public
router.patch('/:id/likePost', likePost);


export default router;