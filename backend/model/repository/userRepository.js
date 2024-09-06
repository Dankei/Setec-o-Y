import { database } from "../../database/database.js";
import {UserEntity} from "../entity/userEntity.js";


export class UserRepository {
   

    // Criando um novo usuário no banco de dados
    async createUser(user){
        try{
        console.log("\n\n\ninfo: Iniciado UserRepository.createUser", user);


        const {username, email, password} = user;


        const [result] = await database.query(
            'INSERT INTO tb_user (username,email,password) VALUES (?,?,?)',
            [username, email, password]
        );

        const newUser = new UserEntity(username, email, password, result.insertId);
        console.log("\n\n\ninfo: Finalizado UserRepository.createUser", newUser);

        return newUser;


    }catch(error){
        console.log("\n\n\nerror: UserRepository.createUser", error);
        throw error;
    }
    }


    // Verificando se o email já está cadastrado
    async findUserByEmail(email){
        const [rows] = await database.query(
            'SELECT * FROM tb_user WHERE email = ?',
            [email]
        );
        if(rows.length){
            const {username, email, password,id} = rows[0];
            return new UserEntity(username, email, password,id);
        }
        return null;
    }


    // Atualizando o status do usuário
    async updateUserStatus(id){
        const [result] = await database.query(
            'UPDATE tb_user SET status = 1 WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }


    async fintUserbyId(id){
        const [rows] = await database.query(
            'SELECT * FROM tb_user WHERE id = ?',
            [id]
        );
        if(rows.length){
            const {id, username, email, password} = rows[0];
            return new UserEntity(id, username, email, password);
        }
        return null;
    }

    async findUserAll(){
        const [rows] = await database.query(
            'SELECT * FROM tb_user'
        );
        return rows.map(row => {
            const {id, username, email, password} = row;
            return new UserEntity(username, email, password,id);
        });
    }

}