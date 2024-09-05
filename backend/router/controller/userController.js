import { UserEntity } from '../../model/entity/userEntity.js';
import { UserService } from '../../model/service/userService.js';

const userService = new UserService();

export class UserController{

    async  createUser (request, response) {

    const { username, email, senha } = request.body;
    console.log(username, email, senha);

    try {
            const user = new UserEntity(username, email, senha, null);
            console.log(user);
            const result = await userService.createUser(user);
            response.status(201).json(result);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }

    }

    async findUserAll(request, response) {
        try {
            const result = await userService.findUserAll();
            response.status(200).json(result);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }
    }

}