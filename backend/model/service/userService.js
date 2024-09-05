import { UserRepository } from "../repository/userRepository.js";

const userRepository = new UserRepository();

export class UserService {

    createUser(user) {

        //Encrpitando a senha para passar para o banco de dados
        const passwordEncrypted = bcrypt.hashSync(user.password, 10);
        user.password = passwordEncrypted;

        // //Verioficando se o usuário já existe
        // const userExists = userRepository.findUserByEmail(user.email);
        // if (userExists) {
        //     throw new Error('User already exists');
        // }

        return userRepository.createUser(user);
    }

    findUserById(id) {
        return userRepository.findUserById(id);
    }

}
