import express from 'express';

import { UserController } from './controller/userController.js';
import { LikeController } from './controller/likeController.js';
import { TweetController } from './controller/tweetController.js';
import { ReplyController } from './controller/replyController.js';


const router = express.Router();
const userController = new UserController();
const likeController = new LikeController();
const tweetController = new TweetController();
const replyController = new ReplyController();




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




// Rotas de reply
router.post('/reply', replyController.createReply);



export default router;