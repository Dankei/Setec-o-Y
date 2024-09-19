import { database } from "../../database/database.js";
import { TweetEntity } from "../entity/tweetEntity.js";

export class TweetRepository {
  
//Inicio da task




















//Fim da task



  // Deletar um tweet
  async deleteTweet(id) {
    try {

      const [result] = await database.query(
        "DELETE FROM tb_tweet WHERE id = ?",
        [id]
      );


      return result.affectedRows > 0;
    } catch (error) {
      throw new Error("Falha ao deletar tweet");
    }
  }

  // Encontrar um tweet por ID
  async findTweetById(id) {
    try {

      const [rows] = await database.query(
        "SELECT * FROM tb_tweet WHERE id = ?",
        [id]
      );
      if (rows.length) {
        const { id, text, authorID, createdAt } = rows[0];
        return new TweetEntity(text, authorID, new Date(createdAt), id);
      }

      return null;
    } catch (error) {
      throw new Error("Falha ao encontrar tweet");
    }
  }

  

  // Encontrar tweets por autor
  async findTweetsByauthorID(authorID) {
    try {

      const [rows] = await database.query(
        "SELECT * FROM tb_tweet WHERE authorID = ?",
        [authorID]
      );


      return rows.map((row) => {
        const { id, text, authorID, createdAt } = row;
        return new TweetEntity(text, authorID, new Date(createdAt), id);
      });
    } catch (error) {
 
      throw new Error("Falha ao encontrar tweets por autor");
    }
  }
}
