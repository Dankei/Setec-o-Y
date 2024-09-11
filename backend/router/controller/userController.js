import { UserEntity } from '../../model/entity/userEntity.js';
import { UserService } from '../../model/service/userService.js';
import { log } from '../../log/logger.js';

const userService = new UserService();

export class UserController{

    async  createUser (request, response) {
        log.info("Feito request na rota /users")
        log.trace("Iniciado UserController.createUser");
        const { username, email, password } = request.body;

        try {

            const user = new UserEntity(username, email, password);
            const result = await userService.createUser(user);

            log.success("Finalizado request com sucesso");
            response.status(201).json(result);
        
            
        } catch (error) {
            if(error.message === 'Email já cadastrado' 
                || error.message === 'Username já cadastrado' 
                || error.message === 'Campos obrigatórios não preenchidos'){
                response.status(409).json({message: error.message});
            }else{
                response.status(400).json({message: "Erro ao criar usuário"});
            }
            
        }

    }

    async confirmEmail(request, response) {
        log.info("Feito request na rota /users/confirmEmail")
        log.trace("Iniciado UserController.confirmEmail");
        const { token , userID } = request.body;

        try {
            const result = await userService.confirmEmail(token, userID);

            log.success("Finalizado request com sucesso");
            response.status(200).json(result);

        } catch (error) {            
            if(error.message === 'Token inválido'){
                response.status(401).json({message: error.message});

            }else if(error.message === 'Token expirado'){
                response.status(406).json({message: error.message});

            }else{
                response.status(400).json({message: error.message});
            }
        }
    }

    async login(request, response) {
        log.info("Feito request na rota /login")
        log.trace("Iniciado UserController.login");
        
        const { email, password } = request.body;

        try {
            const result = await userService.login(email, password);

            log.success("Finalizado request com sucesso");
            response.status(200).json(result);

        } catch (error) {

            if(error.message === 'Email não cadastrado'){
                response.status(404).json({message: error.message});

            }else if(error.message === 'Senha incorreta'){
                response.status(401).json({message: error.message});

            }else{
            response.status(400).json({message: error.message});
            }
        }

    }


    async followUser(request, response) {
        console.log("\n\n\ninfo: Iniciado UserController.followUser", request.body);
        //Primeiro é o usuario que ta logado e o segundo é o usuario que ele quer seguir
        const { followerID, followedID } = request.body;

        try {
            const result = await userService.followUser(followerID, followedID);

            console.log("\n\n\ninfo: Finalizado UserController.followUser", result);
            response.status(201).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.followUser", error.message);
                if(error.message === 'dar unfollow'){
                    response.status(205).json({message: error.message});
                }else{
                    response.status(400).json({message: error.message});
                }
            
        }
    }

    async getFollowers(request,response){
        console.log("\n\n\ninfo: Iniciado UserController.getFollowers", request.body);
        const { userID } = request.body;

        try {
            const result = await userService.getFollowers(userID);

            console.log("\n\n\ninfo: Finalizado UserController.getFollowers", result);
            response.status(200).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.getFollowers", error.message);
            response.status(400).json({message: error.message});
        }
    }
    async getFollowing(request,response){
        console.log("\n\n\ninfo: Iniciado UserController.getFollowing", request.body);
        const { userID } = request.body;

        try {
            const result = await userService.getFollowing(userID);

            console.log("\n\n\ninfo: Finalizado UserController.getFollowing", result);
            response.status(200).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.getFollowing", error.message);
            response.status(400).json({message: error.message});
        }
    }
    async getfollowersList(request,response){
        console.log("\n\n\ninfo: Iniciado UserController.getfollowersList", request.body);
        const { userID } = request.body;

        try {
            const result = await userService.getfollowersList(userID);

            console.log("\n\n\ninfo: Finalizado UserController.getfollowersList", result);
            response.status(200).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.getfollowersList", error.message);
            response.status(400).json({message: error.message});
        }
    }
    async getfollowingList(request,response){
        console.log("\n\n\ninfo: Iniciado UserController.getfollowingList", request.body);
        const { userID } = request.body;

        try {
            const result = await userService.getfollowingList(userID);

            console.log("\n\n\ninfo: Finalizado UserController.getfollowingList", result);
            response.status(200).json(result);

        } catch (error) {
            console.log("\n\n\nerror: UserController.getfollowingList", error.message);
            response.status(400).json({message: error.message});
        }
    }



}