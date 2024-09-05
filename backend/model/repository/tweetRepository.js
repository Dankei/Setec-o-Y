import { database } from "../../database/database.js";
import { TweetEntity } from "../entity/tweetEntity.js";

export class TweetRepository {
  // Criando um novo tweet
  async createTweet(tweet) {
    try {
      const { text, authorId, createdAt } = tweet;

      const [result] = await database.query(
        "INSERT INTO tb_tweet (text, authorId, createdAt) VALUES (?, ?, ?)",
        [text, authorId, createdAt]
      );

      const newTweet = new TweetEntity(
        text,
        authorId,
        createdAt,
        result.insertId
      );

      return newTweet;
    } catch (error) {
      console.error("Error na criação do tweet:", error);
      throw new Error("Failed to create tweet");
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
        const { id, text, authorId, createdAt } = rows[0];
        return new TweetEntity(text, authorId, new Date(createdAt), id);
      }
      return null;
    } catch (error) {
      console.error("Error ao encotrar o tweet pelo ID:", error);
      throw new Error("Failed to find tweet");
    }
  }

  // Encontrar todos os tweets
  async findAllTweets() {
    try {
      const [rows] = await database.query("SELECT * FROM tb_tweet");
      return rows.map((row) => {
        const { id, text, authorId, createdAt } = row;
        return new TweetEntity(text, authorId, new Date(createdAt), id);
      });
    } catch (error) {
      console.error("Error ao encotrar todos os tweets:", error);
      throw new Error("Failed to find tweets");
    }
  }

  // Encontrar tweets por autor
  async findTweetsByAuthorId(authorId) {
    try {
      const [rows] = await database.query(
        "SELECT * FROM tb_tweet WHERE authorId = ?",
        [authorId]
      );
      return rows.map((row) => {
        const { id, text, authorId, createdAt } = row;
        return new TweetEntity(text, authorId, new Date(createdAt), id);
      });
    } catch (error) {
      console.error("Error ao encotrar o tweet pelo ID do autor:", error);
      throw new Error("Failed to find tweets by author");
    }
  }
}
