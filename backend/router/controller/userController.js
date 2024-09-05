import { UserEntity } from '../../model/entity/userEntity.js';
import { UserService } from '../../model/service/userService.js';

const userService = new UserService();

export class UserController{

    async  createUser (request, response) {

    const { username, email, password } = request.body;

    try {
            const user = new UserEntity(username, email, password);
            const result = await userService.createUser(user);

            response.status(201).json(result);
        } catch (error) {
            response.status(400).json({ message: error.message });
        }

    }

}