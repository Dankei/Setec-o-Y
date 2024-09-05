import express from 'express';

import { UserController } from './controller/userController.js';
import { LikeController } from './controller/likeController.js';

const router = express.Router();
const userController = new UserController();
const likeController = new LikeController();
const tweetController = new TweetController();

// Rotas de usuários
router.post('/users', userController.createUser);
router.get('/users', userController.findUserAll);


// Rotas de tweets
router.post('/tweets', tweetController.createTweet);
router.get('/tweets', tweetController.findAllTweets);
router.get('/tweets/:id', tweetController.findTweetById);
router.get('/tweets/author/:authorId', tweetController.findTweetsByAuthorId);




// Rotas de likes
router.post('/likes', likeController.createLike);



export default router;