import { UserEntity } from '../../model/entity/userEntity.js';
import { UserService } from '../../model/service/userService.js';

const userService = new UserService();

export class UserController{

    async  createUser (request, response) {
        console.log("\n\n\ninfo: Iniciado UserController.createUser", request.body);
        const { username, email, password } = request.body;

        try {

            const user = new UserEntity(username, email, password, null);
            const result = await userService.createUser(user);

            console.log("\n\n\ninfo: Finalizado UserController.createUser", result);
            response.status(201).json(result);

            
        } catch (error) {
            console.log("\n\n\nerror: UserController.createUser", error);
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