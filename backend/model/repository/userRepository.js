import { database } from "../../database/database.js";
import {UserEntity} from "../entity/userEntity.js";


export class UserRepository {
   

    // Criando um novo usuário no banco de dados
    async createUser(user){
        const [result] = await database.query(
            'INSERT INTO tb_user (username,email,senha) VALUES (?,?,?)',
            [user.username, user.email, user.senha]
        );
        user.id = result.insertId;
        return user;
    }


    async fintUserbyId(id){
        const [rows] = await database.query(
            'SELECT * FROM tb_user WHERE id = ?',
            [id]
        );
        if(rows.length){
            const {id, username, email, senha} = rows[0];
            return new UserEntity(id, username, email, senha);
        }
        return null;
    }

}