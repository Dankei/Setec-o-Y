import { UserRepository } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';

const userRepository = new UserRepository();

export class UserService {

    createUser(user) {
        console.log("\n\n\ninfo: Iniciado UserService.createUser", user);


        //Regra para salvar usuario 


        console.log("\n\n\ninfo: Finalizado UserService.createUser", user);
        return userRepository.createUser(user);
    }

    findUserById(id) {
        return userRepository.findUserById(id);
    }

    findUserAll() {
        return userRepository.findUserAll();
    }

}
