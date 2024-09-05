import { database } from "../../database/database.js";
import {LikeEntity} from "../entity/likeEntity.js";


export class LikeRepository {

    //Cria um novo like no banco de dados
    async createLike(like){
        try{
        console.log("\n\n\ninfo: Iniciado LikeRepository.createLike", like);

        const {userID, tweetID, createdAT} = like;

        const [result] = await database.query(
            'INSERT INTO tb_like (userID, tweetID, createdAT) VALUES (?,?,?)',
            [userID, tweetID, createdAT]
        );

        const newLike = new LikeEntity(result.insertId,userID, tweetID, createdAT);
        console.log("\n\n\ninfo: Finalizado LikeRepository.createLike", newLike);

        return newLike;

        }catch(error){
            console.log("\n\n\nerror: LikeRepository.createLike", error);
            throw error;
        }
    }
}