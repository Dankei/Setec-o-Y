import express from 'express';
import { UserController } from './controller/userController.js';
import { LikeController } from './controller/likeController.js';
import { ReplyController } from './controller/replyController.js';

const router = express.Router();
const userController = new UserController();
const likeController = new LikeController();

const replyController = new ReplyController();

// Rotas de usuários
router.post('/users', userController.createUser);
router.get('/users', userController.findUserAll);




// Rotas de likes
router.post('/likes', likeController.createLike);



// Rotas de reply
router.post('/reply', replyController.createReply);


export default router;