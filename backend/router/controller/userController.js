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
        log.info("Feito request na rota /users/follow")
        log.trace("Iniciado UserController.followUser");
        //Primeiro é o usuario que ta logado e o segundo é o usuario que ele quer seguir
        const { followerID, followedID } = request.body;

        try {
            const result = await userService.followUser(followerID, followedID);

            log.success("Finalizado request com sucesso");
            response.status(201).json(result);

        } catch (error) {      
                if(error.message === 'dar unfollow'){
                    response.status(205).json({message: error.message});
                }else{
                    response.status(400).json({message: error.message});
                }
            
        }
    }

// add id pero url
    async getFollowers(request,response){
        log.info("Feito request na rota /users/followers/:userID")
        log.trace("Iniciado UserController.getFollowers");
        const { userID } = request.params;

        try {
            const result = await userService.getFollowers(userID);

            log.success("Finalizado request com sucesso");
            response.status(200).json(result);

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    async getFollowing(request,response){
        log.info("Feito request na rota /users/following/:userID")
        log.trace("Iniciado UserController.getFollowing");
        const { userID } = request.params;

        try {
            const result = await userService.getFollowing(userID);

            log.success("Finalizado request com sucesso");
            response.status(200).json(result);

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    async getfollowersList(request,response){
        log.info("Feito request na rota /users/followersList/:userID")
        log.trace("Iniciado UserController.getfollowersList");
        const { userID } = request.params;

        try {
            const result = await userService.getfollowersList(userID);

            log.success("Finalizado request com sucesso");
            response.status(200).json(result);

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }
    async getfollowingList(request,response){
        log.info("Feito request na rota /users/followingList/:userID")
        log.trace("Iniciado UserController.getfollowingList");
        const { userID } = request.params;

        try {
            const result = await userService.getfollowingList(userID);

            log.success("Finalizado request com sucesso");
            response.status(200).json(result);

        } catch (error) {
            response.status(400).json({message: error.message});
        }
    }



}