import express from 'express';
import { UserController } from './controller/userController.js';

const router = express.Router();
const userController = new UserController();

router.post('/users', userController.createUser);
router.get('/teste', (req, res) => {
    res.send('Hello World');
});

router.get('/users', userController.findUserAll);
export default router;