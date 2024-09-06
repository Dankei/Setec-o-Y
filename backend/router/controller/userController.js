import e from 'express';
import { UserEntity } from '../../model/entity/userEntity.js';
import { UserService } from '../../model/service/userService.js';

const userService = new UserService();

export class UserController{

    async  createUser (request, response) {
        console.log("\n\n\ninfo: Iniciado UserController.createUser", request.body);
        const { username, email, password } = request.body;

        try {

            const user = new UserEntity(username, email, password);
            const result = await userService.createUser(user);

            console.log("\n\n\ninfo: Finalizado UserController.createUser", result);
            response.status(201).json(result);
        
            
        } catch (error) {
            console.log("\n\n\nerror: UserController.createUser",error.message);
            if(error.message === 'Email já cadastrado'){
                response.status(409).json({message: error.message});
            }else{
                response.status(400).json({message: error.message});
            }
            
        }

    }

    async confirmEmail(request, response) {
        console.log("\n\n\ninfo: Iniciado UserController.confirmEmail", request.body);
        const { token , userID } = request.body;

        try {
            const result = await userService.confirmEmail(token, userID);

            console.log("\n\n\ninfo: Finalizado UserController.confirmEmail", result);
            response.status(200).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.confirmEmail", error.message);

            if(error.message === 'Token inválido'){
                response.status(401).json({message: error.message});

            }else if(error.message === 'Email não cadastrado'){
                response.status(404).json({message: error.message});

            }else{
                response.status(400).json({message: error.message});
            }
        }
    }


    async login(request, response) {
        console.log("\n\n\ninfo: Iniciado UserController.login", request.body);
        const { email, password } = request.body;

        try {
            const result = await userService.login(email, password);

            console.log("\n\n\ninfo: Finalizado UserController.login", result);
            response.status(200).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.login", error.message);

            if(error.message === 'Email não cadastrado'){
                response.status(404).json({message: error.message});

            }else if(error.message === 'Senha incorreta'){
                response.status(401).json({message: error.message});

            }else{
            response.status(400).json({message: error.message});
            }
        }

    }




}