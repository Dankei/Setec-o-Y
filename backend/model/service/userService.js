import { UserRepository } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';

const userRepository = new UserRepository();

export class UserService {

    createUser(user) {
        
        console.log("\n\n\ninfo: Iniciado UserService.createUser", user);


        //Regra para salvar usuario 
        //1. Verificar se o email já está cadastrado
        console.log("\n\ninfo: Iniciado Verificação se o email já existe");
        const userExists =  userRepository.findUserByEmail(user.email);
        if (userExists) {
            console.log("\n\nerror: Email já cadastrado");
            throw new Error('Email já cadastrado');
        }


        //2. Criptografar a senha
        console.log("\n\ninfo: Iniciado criptocrafia da senha", user.password);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        console.log("\n\ninfo: Finalizado criptocrafia da senha", user.password);



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
