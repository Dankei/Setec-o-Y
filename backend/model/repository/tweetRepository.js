import { database } from "../../database/database.js";
import { TweetEntity } from "../entity/tweetEntity.js";

export class TweetRepository {
  // Criando um novo tweet
  async createTweet(tweet) {
    try {
      const { text, authorID, createdAt } = tweet;

      const [result] = await database.query(
        "INSERT INTO tb_tweet (text, authorID, createdAt) VALUES (?, ?, ?)",
        [text, authorID, createdAt]
      );

      const newTweet = new TweetEntity(
        text,
        authorID,
        createdAt,
        result.insertId
      );



      return newTweet;
    } catch (error) {
      throw new Error("Falha ao criar tweet");
    }
  }

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

  // Encontrar todos os tweets
  async findAllTweets() {
    try {

      const [rows] = await database.query("SELECT * FROM tb_tweet");


      return rows.map((row) => {
        const { id, text, authorID, createdAt } = row;

        return new TweetEntity(text, authorID, new Date(createdAt), id);
      });
    } catch (error) {
      throw new Error("Falha ao encontrar tweets");
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


  //Buscar a quantidade de yeets de um autor
  async countTweetsByauthorID(authorID) {
    const [rows] = await database.query(
      "SELECT COUNT(*) AS followers FROM tb_tweet WHERE authorID = ?",
      [authorID]
    );
    return rows[0].followers;
  }




}
