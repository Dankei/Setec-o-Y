import { UserRepository } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';
import { GenerateTokenUtils } from "./utils/genereteTokenUtils.js";
import { EmailUtils } from "./utils/emailUtils.js";
import { TokenRepository } from "../repository/tokenRepository.js";	
import { TokenEntity } from "../entity/tokenEntity.js";

const userRepository = new UserRepository();
const generateTokenUtils = new GenerateTokenUtils();
const emailUtils = new EmailUtils();
const tokenRepository = new TokenRepository();

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

        
        //3. Cria token de verificação do email
        console.log("\n\ninfo: Iniciado Verificação se o email é válido gerando o token para o email: ", user.email);
        const token = generateTokenUtils.generateToken();
        console.log("\n\ninfo: Gerado Token : ", token);
        emailUtils.sendEmail(user.email, token);

        //4. Salvar o Usuario no banco de dados
        console.log("\n\n\ninfo: Salvando o Usuario no Banco", user);
        const userNew = await userRepository.createUser(user);
         
        //5. Salvar o Token no banco de dados
        console.log("\n\ninfo: Iniciado salvar token no banco de dados");
        await tokenRepository.createEmailToken(token, userNew.id);

        console.log("\n\n\ninfo: Finalizado UserService.createUser", userNew);
        return userNew;
         
         
    }
    
    async confirmEmail(token, userID) {

        console.log("\n\n\ninfo: Iniciado UserService.confirmEmail", token, userID);

        //Regra para confirmar email
        //1. Verificar se o token é válido
        console.log("\n\ninfo: Iniciado Verificação se o token é válido");
        const userToken = await tokenRepository.findTokenByToken(token, userID);
        console.log("\n\ninfo: valor de userToken", userToken);
        if (userToken === null) {
            console.log("\n\nerror: Token inválido");
            throw new Error('Token inválido');
        }

        //2. Verificar se o token está expirado
        console.log("\n\ninfo: Iniciado Verificação se o token está expirado",new Date(), new Date(userToken.expiresAt));
        const isTokenExpired = new Date() > new Date(userToken.expiresAt);
        if (isTokenExpired) {
            console.log("\n\nerror: Token expirado");
            throw new Error('Token expirado');
        }

        //3. Atualizar o status do usuário
        console.log("\n\ninfo: Iniciado Atualizar o status do usuário");
        await userRepository.updateUserStatus(userID);
        console.log("\n\ninfo: Finalizado Atualizar o status do usuário");

        //4. Deletar o token
        console.log("\n\ninfo: Iniciado Deletar o token");
        await tokenRepository.deleteToken(token,userID);
        console.log("\n\ninfo: Finalizado Deletar o token");

        console.log("\n\n\ninfo: Finalizado UserService.confirmEmail");
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


    async followUser(followerID, followedID) {
        console.log("\n\n\ninfo: Iniciado UserService.followUser", followerID, followedID);

        //Regra para seguir um usuário
        //1. Verificar se o usuário que está seguindo existe
        console.log("\n\ninfo: Iniciado Verificação se o usuário que está seguindo existe");
        const userFollower = await userRepository.findUserById(followerID);
        console.log("\n\ninfo: valor de userFollower", userFollower);
        if (userFollower === null) {
            console.log("\n\nerror: Usuário que está seguindo não existe");
            throw new Error('Usuário que está seguindo não existe');
        }

        //2. Verificar se o usuário que está sendo seguido existe
        console.log("\n\ninfo: Iniciado Verificação se o usuário que está sendo seguido existe");
        const userFollowed = await userRepository.findUserById(followedID);
        console.log("\n\ninfo: valor de userFollowed", userFollowed);
        if (userFollowed === null) {
            console.log("\n\nerror: Usuário que está sendo seguido não existe");
            throw new Error('Usuário que está sendo seguido não existe');
        }

        //3. Verificar se o usuário que está seguindo já segue o usuário que está sendo seguido
        console.log("\n\ninfo: Iniciado Verificação se o usuário que está seguindo já segue o usuário que está sendo seguido");
        const isFollowing = await userRepository.isFollowing(followerID, followedID);
        console.log("\n\ninfo: valor de isFollowing", isFollowing);
        if (isFollowing) {
            console.log("\n\nerror: Usuário que está seguindo já segue o usuário que está sendo seguido");
            await userRepository.unfollowUser(followerID, followedID);
            throw new Error('dar unfollow');
        }

        //4. Seguir o usuário
        console.log("\n\ninfo: Iniciado seguir o usuário");
        await userRepository.followUser(followerID, followedID);
        console.log("\n\ninfo: Finalizado seguir o usuário");

        console.log("\n\n\ninfo: Finalizado UserService.followUser");
    }


}
