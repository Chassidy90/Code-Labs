const express = require('express');
const { getAllPosts } = require('../controllers/task.controllers'); 
const router = express.Router(); 

// GET ALL POSTS
router.route('/').get(getAllPosts);



// // GET POST BY ID
// router.route('/:id').get(getPostById);

// // CREATE POST
// router.route('/').post(createPost);

// // UPDATE POST
// router.route('/:id').patch(updatePost);

// // DELETE POST
// router.route('/:id').delete(deletePost);

module.exports = router; 