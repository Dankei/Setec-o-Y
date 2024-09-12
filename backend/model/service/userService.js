import { UserRepository } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';
import { GenerateTokenUtils } from "./utils/genereteTokenUtils.js";
import { EmailUtils } from "./utils/emailUtils.js";
import { TokenRepository } from "../repository/tokenRepository.js";	
import { log } from "../../log/logger.js";


const userRepository = new UserRepository();
const generateTokenUtils = new GenerateTokenUtils();
const emailUtils = new EmailUtils();
const tokenRepository = new TokenRepository();

export class UserService {

    async createUser(user) {
        
        log.trace("Iniciado UserService.createUser");


        //Regra para salvar usuario 

        // 0. Verificar se os campos obrigatórios foram preenchidos
        if (!user.username || !user.email || !user.password) {
            log.error("Campos obrigatórios não preenchidos");
            throw new Error('Campos obrigatórios não preenchidos');
        }

        //1. Verificar se o email já está cadastrado
        log.trace("Iniciado Verificação se o email já está cadastrado");
        const userExists = await userRepository.findUserByEmail(user.email);
        if (userExists !== null) {
            log.error("Email já cadastrado");
            throw new Error('Email já cadastrado');
        }

        log.trace("Iniciado verificação se o username já está cadastrado");
        const usernameExists = await userRepository.findUserByUsername(user.username);
        if (usernameExists !== null) {
            log.error("Username já cadastrado");
            throw new Error('Username já cadastrado');
        }


        //2. Criptografar a senha
        log.trace("Iniciado criptocrafia da senha");
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;

        
        //3. Cria token de verificação do email
        log.trace("Iniciado criar token de verificação do email");
        const token = generateTokenUtils.generateToken();
        emailUtils.sendEmail(user.email, token);

        //4. Salvar o Usuario no banco de dados
        log.trace("Iniciado salvar usuario no banco de dados");
        const userNew = await userRepository.createUser(user);
         
        //5. Salvar o Token no banco de dados
        await tokenRepository.createEmailToken(token, userNew.id);

        log.trace("Finalizado UserService.createUser");
        return userNew;
         
         
    }
    
    async confirmEmail(token, userID) {

        log.trace("Iniciado UserService.confirmEmail");

        //Regra para confirmar email
        //1. Verificar se o token é válido
        log.trace("Iniciado Verificação se o token é válido");
        const userToken = await tokenRepository.findTokenByToken(token, userID);
        
        if (userToken === null) {
            log.error("Token inválido");
            throw new Error('Token inválido');
        }

        //2. Verificar se o token está expirado
        log.trace("Iniciado Verificação se o token está expirado");
        const isTokenExpired = new Date() > new Date(userToken.expiresAt);
        if (isTokenExpired) {
            log.error("Token expirado");
            throw new Error('Token expirado');
        }

        //3. Atualizar o status do usuário
        log.trace("Iniciado Atualizar o status do usuário");
        await userRepository.updateUserStatus(userID);

        //4. Deletar o token
        log.trace("Iniciado Deletar o token");
        await tokenRepository.deleteToken(token,userID);

        log.trace("Finalizado UserService.confirmEmail");
        return 'Email confirmado com sucesso';
    }


    async login(email, password) {
        log.trace("Iniciado UserService.login");

        //Regra para login
        //0. Verificar se os campos obrigatórios foram preenchidos
        if (!email || !password) {
            log.error("Campos obrigatórios não preenchidos");
            throw new Error('Campos obrigatórios não preenchidos');
        }

        //1. Verificar se o email existe na base de dados
        log.trace("Iniciado Verificação se o email existe na base de dados");
        const user = await userRepository.findUserByEmail(email);
        if (user === null) {
            log.error("Email não cadastrado");
            throw new Error('Email não cadastrado');
        }
        
        //2. Verificar se a senha está correta
        log.trace("Iniciado Verificação se a senha está correta");
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            log.error("Senha incorreta");
            throw new Error('Senha incorreta');
        }

        //3. Verificar se o email foi confirmado
        log.trace("Iniciado Verificação se o email foi confirmado");
        if (user.status == 0) {
            log.error("Email não confirmado");
              
            log.trace("Iniciado criar token de verificação do email");
            const token = generateTokenUtils.generateToken();
            emailUtils.sendEmail(user.email, token);

            await tokenRepository.createEmailToken(token, user.id);
            throw new Error('Email não confirmado');
        }


        log.trace("Finalizado UserService.login");
        return user;
    }


    async followUser(followerID, followedID) {
        log.trace("Iniciado UserService.followUser");

        //Regra para seguir um usuário
        //1. Verificar se o usuário que está seguindo existe
        
        log.trace("Iniciado Verificação se o usuário que está seguindo existe");
        const userFollower = await userRepository.findUserById(followerID);
        if (userFollower === null) {
            log.error("Usuário que está seguindo não existe");
            throw new Error('Usuário que está seguindo não existe');
        }

        //2. Verificar se o usuário que está sendo seguido existe
        log.trace("Iniciado Verificação se o usuário que está sendo seguido existe");
        const userFollowed = await userRepository.findUserById(followedID);
        if (userFollowed === null) {
            log.error("Usuário que está sendo seguido não existe");
            throw new Error('Usuário que está sendo seguido não existe');
        }

        //3. Verificar se o usuário que está seguindo já segue o usuário que está sendo seguido
        log.trace("Iniciado Verificação se o usuário que está seguindo já segue o usuário que está sendo seguido");
        const isFollowing = await userRepository.isFollowing(followerID, followedID);
        if (isFollowing) {
            log.trace("Usuário já segue o usuário será desfeito o follow");
            await userRepository.unfollowUser(followerID, followedID);
            throw new Error('Feito unfollow');
        }

        //4. Seguir o usuário
        log.trace("Iniciado seguir o usuário");
        await userRepository.followUser(followerID, followedID);
        
        log.trace("Finalizado UserService.followUser");
        return 'Feito follow';
    }

    async getFollowers(userID) {
        log.trace("Iniciado UserService.getFollowers");

        //Regra para ver a quantidade de seguidores de um usuário
        log.trace("Iniciado Verificação se o usuário existe");
        const user = await userRepository.findUserById(userID);
        if (user === null) {
            log.error("Usuário não existe");
            throw new Error('Usuário não existe');
        }

        log.trace("Iniciado Verificação se o usuário tem seguidores");
        const followers = await userRepository.countFollowers(userID);

        log.trace("Finalizado UserService.getFollowers");
        return followers;
    }

    async getFollowing(userID) {
        log.trace("Iniciado UserService.getFollowing");

        //Regra para ver a quantidade de seguindo de um usuário
        log.trace("Iniciado Verificação se o usuário existe");
        const user = await userRepository.findUserById(userID);
        if (user === null) {
            log.error("Usuário não existe");
            throw new Error('Usuário não existe');
        }

        log.trace("Iniciado Verificação se o usuário segue alguém");
        const following = await userRepository.countFollowing(userID);

        log.trace("Finalizado UserService.getFollowing");
        return following;
    }

    async getfollowersList(userID) {
        log.trace("Iniciado UserService.getfollowersList", userID);

        //Regra para ver a lista de usuarios que um usuário segue
        log.trace("Iniciado Verificação se o usuário existe");
        const user = await userRepository.findUserById(userID);
        if (user === null) {
            log.error("Usuário não existe");
            throw new Error('Usuário não existe');
        }

        log.trace("Iniciado Verificação se o usuário tem seguidores");
        const followersList = await userRepository.listFollowers(userID);
        

        log.trace("Finalizado UserService.getfollowersList");
        return followersList;
    }

    async getfollowingList(userID) {
        log.trace("Iniciado UserService.getfollowingList", userID);

        //Regra para ver a lista de seguidores de um usuário
        log.trace("Iniciado Verificação se o usuário existe");
        const user = await userRepository.findUserById(userID);
        if (user === null) {
            log.error("Usuário não existe");
            throw new Error('Usuário não existe');
        }

        log.trace("Iniciado Verificação se o usuário segue alguém");
        const followingList = await userRepository.listFollowing(userID);
        

        log.trace("Finalizado UserService.getfollowingList");
        return followingList;
    }


    async findByUsername(username) {
        log.trace("Iniciado UserService.getUserByUsername", username);

        //Regra para buscar um usuário pelo username
        log.trace("Iniciado Verificação se o usuário existe");
        const user = await userRepository.findUserByUsername(username);
        if (user === null) {
            log.error("Usuário não existe");
            throw new Error('Usuário não existe');
        }

        log.trace("Finalizado UserService.getUserByUsername");
        return { id: user.id, username: user.username, email: user.email};
    }

    async findById(id) {
        log.trace("Iniciado UserService.getUserById", id);

        //Regra para buscar um usuário pelo ID
        log.trace("Iniciado Verificação se o usuário existe");
        const user = await userRepository.findUserById(id);
        if (user === null) {
            log.error("Usuário não existe");
            throw new Error('Usuário não existe');
        }

        log.trace("Finalizado UserService.getUserById");
        return { id: user.id, username: user.username, email: user.email};
    }


}
