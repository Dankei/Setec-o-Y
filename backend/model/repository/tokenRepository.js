import { database } from "../../database/database.js";
import { TokenEntity } from "../entity/tokenEntity.js";

export class TokenRepository {


    // Criando token de verificação do email
    async createEmailToken(token, userId) {
        console.log("\n\n\ninfo: Iniciado createEmailToken", token, userId);

        const expires_at = new Date(new Date().getTime() + 120 * 1000);

        const [result] = await database.query(
            'INSERT INTO tb_user_tokens (token, user_id , expires_at) VALUES (?,?,?)',
            [token, userId, expires_at]
        );
        console.log("\n\n\ninfo: Finalizado UserRepository.createEmailToken", result.insertId);
    }


    // Verificando se o token é válido
    async findTokenByToken(token, userId) {
        console.log("\n\n\ninfo: Iniciado findTokenByToken", token, userId);

        const [result] = await database.query(
            'SELECT * FROM tb_user_tokens WHERE token = ? AND user_id = ?',
            [token, userId]
        );

        const tokenData = new TokenEntity(result[0].id, result[0].token, result[0].user_id, result[0].expires_at);
        console.log("\n\n\ninfo: Finalizado UserRepository.findTokenByToken", tokenData);
        return tokenData;
    }


    // Deletando token
    async deleteToken(token,userId) {
        console.log("\n\n\ninfo: Iniciado deleteToken", token);

        const [result] = await database.query(
            'DELETE FROM tb_user_tokens WHERE token = ? AND user_id = ?',
            [token,userId]
        );

        console.log("\n\n\ninfo: Finalizado UserRepository.deleteToken", result.affectedRows > 0);
        return result.affectedRows > 0;
    }
}