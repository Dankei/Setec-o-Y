import { database } from "../../database/database.js";
import {UserEntity} from "../entity/userEntity.js";
import { log } from "../../log/logger.js";


export class UserRepository {
   

    // Criando um novo usuário no banco de dados
    async createUser(user){
        try{
        log.trace("Iniciado UserRepository.createUser");

      const { username, email, password } = user;

      const [result] = await database.query(
        "INSERT INTO tb_user (username,email,password) VALUES (?,?,?)",
        [username, email, password]
      );

        const newUser = new UserEntity(username, email, password, result.insertId);
        log.trace("Finalizado UserRepository.createUser");

        return newUser;


    }catch(error){
        log.error("UserRepository.createUser\t",error.message);
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

    // Verificando se o username já está cadastrado
    async findUserByUsername(username){
        const [rows] = await database.query(
            'SELECT * FROM tb_user WHERE username = ?',
            [username]
        );
        if(rows.length){
            const {username, email, password,id} = rows[0];
            return new UserEntity(username, email, password,id);
        }
        return null;
    }

  // Atualizando o status do usuário
  async updateUserStatus(id) {
    const [result] = await database.query(
      "UPDATE tb_user SET status = 1 WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Encontrando um usuário pelo ID
  async findUserById(id) {
    try {
      const [rows] = await database.query(
        "SELECT * FROM tb_user WHERE id = ?",
        [id]
      );
      if (rows.length) {
        const { id, username, email, password } = rows[0];
        return new UserEntity(username, email, password, id);
      }
      return null;
    } catch (error) {
      throw new Error("Falha ao encontrar user");
    }
  }

  // Verificando se um usuário está seguindo outro
  async isFollowing(followerID, followedID) {
    const [rows] = await database.query(
      "SELECT * FROM tb_follow WHERE followerID = ? AND followedID = ?",
      [followerID, followedID]
    );
    return rows.length > 0;
  }

  // Deixando de seguir um usuário
  async unfollowUser(followerID, followedID) {
    const [result] = await database.query(
      "DELETE FROM tb_follow WHERE followerID = ? AND followedID = ?",
      [followerID, followedID]
    );
    return result.affectedRows > 0;
  }

  // Seguindo um usuário
  async followUser(followerID, followedID) {
    const [result] = await database.query(
      "INSERT INTO tb_follow (followerID, followedID) VALUES (?,?)",
      [followerID, followedID]
    );
    return result.affectedRows > 0;
  }

  // Contando a quantidade de seguidores de um usuário
  async countFollowers(id) {
    const [rows] = await database.query(
      "SELECT COUNT(*) AS followers FROM tb_follow WHERE followedID = ?",
      [id]
    );
    return rows[0].followers;
  }

  // Contando a quantidade de usuários que um usuário segue
  async countFollowing(id) {
    const [rows] = await database.query(
      "SELECT COUNT(*) AS following FROM tb_follow WHERE followerID = ?",
      [id]
    );
    return rows[0].following;
  }

  // Listando os seguidores de um usuário
  async listFollowers(id) {
    const [rows] = await database.query(
      "SELECT u.username FROM tb_user u JOIN tb_follow f ON u.id = f.followerID WHERE f.followedID = ?",
      [id]
    );
    return rows.map((row) => row.username);
  }

  // Listando os usuários que um usuário segue
  async listFollowing(id) {
    const [rows] = await database.query(
      "SELECT u.username FROM tb_user u JOIN tb_follow f ON u.id = f.followedID WHERE f.followerID = ?",
      [id]
    );
    return rows.map((row) => row.username);
  }


  //Limpeza de usuarios não confirmados
  async deleteUnconfirmedUsers(){
    const [result] = await database.query(
      "DELETE FROM tb_user WHERE status = 0"
    );
    return result.affectedRows > 0;
  }

}