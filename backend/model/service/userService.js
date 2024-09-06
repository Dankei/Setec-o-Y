import { UserRepository } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';

const userRepository = new UserRepository();

export class UserService {

    async createUser(user) {
        
        console.log("\n\n\ninfo: Iniciado UserService.createUser", user);


        //Regra para salvar usuario 
        //1. Verificar se o email já está cadastrado
        console.log("\n\ninfo: Iniciado Verificação se o email já existe");
        const userExists = await userRepository.findUserByEmail(user.email);
        console.log("\n\ninfo: valor de userExists", userExists);
        if (userExists !== null) {
            console.log("\n\nerror: Email já cadastrado");
            throw new Error('Email já cadastrado');
        }


        //2. Criptografar a senha
        console.log("\n\ninfo: Iniciado criptocrafia da senha", user.password);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        console.log("\n\ninfo: Finalizado criptocrafia da senha", user.password);

        
        //3. Envia confirmação de email para o usuário 
        console.log("\n\ninfo: Iniciado Verificação se o email é válido", user.email);



        console.log("\n\n\ninfo: Finalizado UserService.createUser", user);
        return userRepository.createUser(user);
        
      
    }

    async login(email, password) {
        console.log("\n\n\ninfo: Iniciado UserService.login", email, password);

        //Regra para login
        //1. Verificar se o email existe na base de dados
        console.log("\n\ninfo: Iniciado Verificação se o email existe");
        const user = await userRepository.findUserByEmail(email);
        console.log("\n\ninfo: valor de user", user);
        if (user === null) {
            console.log("\n\nerror: Email não cadastrado");
            throw new Error('Email não cadastrado');
        }

        
        //2. Verificar se a senha está correta
        console.log("\n\ninfo: Iniciado Verificação se a senha está correta", user.password);
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect) {
            console.log("\n\nerror: Senha incorreta");
            throw new Error('Senha incorreta');
        }

        console.log("\n\n\ninfo: Finalizado UserService.login", user);
        return user;
    }

}
