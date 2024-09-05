import express from 'express';
import { UserController } from './controller/userController.js';
import { LikeController } from './controller/likeController.js';

const router = express.Router();
const userController = new UserController();
const likeController = new LikeController();


// Rotas de usuários
router.post('/users', userController.createUser);
router.get('/users', userController.findUserAll);




// Rotas de likes
router.post('/likes', likeController.createLike);


export default router;