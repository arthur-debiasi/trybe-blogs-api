const express = require('express');
const tokenValidate = require('../middlewares/tokenValidate');
const { postController } = require('../controller');
const { postFields } = require('../middlewares/postFields.validate');
const { updatePostFields } = require('../middlewares/updatePostFields.validate');

const postRouter = express.Router();

postRouter.put('/:id', updatePostFields, tokenValidate, postController.updatePost);
postRouter.get('/:id', tokenValidate, postController.getPostById);
postRouter.post('/', postFields, tokenValidate, postController.postPost);
postRouter.get('/', tokenValidate, postController.getPosts);

module.exports = {
  postRouter,
};