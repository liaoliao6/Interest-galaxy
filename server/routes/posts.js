import express from 'express';
import { createPost, getPosts, getFoodPosts, getTravelPosts, getFashionPosts, getDesignPosts, getCosmeticPosts, getPost, deletePost, updatePost, likePost } from '../controllers/posts.js';

const router = express.Router();

// @route  POST api/posts
// @desc   Create A Post
// @access Public
router.post('/', createPost);

// @route  GET api/posts
// @desc   Get All Posts
// @access Public
router.get('/', getPosts);

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