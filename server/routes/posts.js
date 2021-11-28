import express from 'express';
import auth from '../middleware/auth.js';
import { createPost, getPosts, getFoodPosts, getTravelPosts, getFashionPosts, getDesignPosts, getCosmeticPosts, getPost, deletePost, updatePost, likePost, getPersonalPosts } from '../controllers/posts.js';

const router = express.Router();

// @route  POST api/posts
// @desc   Create A Post
// @access Public
router.post('/', auth, createPost);

// @route  GET api/posts
// @desc   Get All Posts
// @access Public
router.get('/', getPosts);

// @route  Patch api/posts/:id
// @desc   Get posts from user ID.
// @access Public
router.get('/personal/:id', getPersonalPosts);

// @route  GET api/posts/food
// @desc   Get All Posts
// @access Public
router.get('/food', getFoodPosts);

// @route  GET api/posts/travel
// @desc   Get All Posts
// @access Public
router.get('/travel', getTravelPosts);

// @route  GET api/posts/fashion
// @desc   Get All Posts
// @access Public
router.get('/fashion', getFashionPosts);

// @route  GET api/posts/design
// @desc   Get All Posts
// @access Public
router.get('/design', getDesignPosts);

// @route  GET api/posts/cosmetic
// @desc   Get All Posts
// @access Public
router.get('/cosmetic', getCosmeticPosts);

// @route  GET api/posts/:id
// @desc   Get A Post
// @access Public
router.get('/:id', getPost);

// @route  DELETE api/posts/:id
// @desc   Delete A Post
// @access Public
router.delete('/:id', auth, deletePost);

// @route  Patch api/posts/:id
// @desc   Update A Post
// @access Public
router.patch('/:id', auth, updatePost);

// @route  Patch api/posts/:id
// @desc   Like A Post
// @access Public
router.patch('/:id/likePost', auth, likePost);


export default router;