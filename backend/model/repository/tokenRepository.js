import { database } from "../../database/database.js";

export class TokenRepository {


    // Criando token de verificação do email
    async createEmailToken(token, userId) {
        console.log("\n\n\ninfo: Iniciado createEmailToken", token, userId);

        const expires_at = new Date(new Date() + 60 * 1000);

        const [result] = await database.query(
            'INSERT INTO tb_user_tokens (token, user_id , expires_at) VALUES (?,?,?)',
            [token, userId, expires_at]
        );
        console.log("\n\n\ninfo: Finalizado UserRepository.createEmailToken", result.insertId);
    }


}