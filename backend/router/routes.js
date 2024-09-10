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
router.post('/users/confirmEmail', userController.confirmEmail);
router.post('/login', userController.login);

//Rota para seguir um usuário ou deixar de seguir
router.post('/users/follow', userController.followUser);

router.get('/users/followers', userController.getFollowers); //Rota para ver a quantidade de seguidores de um usuário
router.get('/users/following', userController.getFollowing); //Rota para ver a quantidade de seguindo de um usuário
router.get('/users/followersList', userController.getfollowersList); //Rota para ver a lista de usuarios que um usuário segue
router.get('/users/followingList', userController.getfollowingList); //Rota para ver a lista de seguidores de um usuário

// Rotas de tweets
router.post('/tweets', tweetController.createTweet);
router.delete('/tweets/:id', tweetController.deleteTweet);
router.get('/tweets', tweetController.findAllTweets);
router.get('/tweets/:id', tweetController.findTweetById);
router.get('/tweets/author/:authorId', tweetController.findTweetsByAuthorId);


// Rotas de likes
router.post('/likes', likeController.createLike);




// Rotas de reply
router.post('/reply', replyController.createReply);



export default router;