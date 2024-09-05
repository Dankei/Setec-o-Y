import { database } from "../../database/database.js";
import {ReplyEntity} from "../entity/replyEntity.js";


export class ReplyRepository {

    //Cria uma nova resposta no banco de dados
    async createReply(reply){
        try{
            console.log("\n\n\ninfo: Iniciado ReplyRepository.createReply", reply);
            
            const {text, userID, tweetID, replyID} = reply;


            const [result] = await database.query(
                'INSERT INTO tb_reply (text, userID, tweetID, replyID) VALUES (?,?,?,?)',
                [text, userID, tweetID, replyID]
            );

            const newReply = new ReplyEntity(text, userID, tweetID, replyID,result.insertId);
            console.log("\n\n\ninfo: Finalizado ReplyRepository.createReply", newReply);

            return newReply;

        }catch(error){
            console.log("\n\n\nerror: ReplyRepository.createReply", error);
            throw error;
        }
    }
}