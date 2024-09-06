import { database } from "../../database/database.js";
import { TweetEntity } from "../entity/tweetEntity.js";

export class TweetRepository {
  // Criando um novo tweet
  async createTweet(tweet) {
    try {
      console.log("\n\n\ninfo: Iniciado TweetRepository.createTweet", tweet); // Debug

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

      console.log(
        "\n\n\ninfo: Finalizado TweetRepository.createTweet",
        newTweet
      ); // Debug

      return newTweet;
    } catch (error) {
      console.log("\n\n\nerror: Error ao criar o tweet:", error); // Debug
      throw new Error("Falha ao criar tweet");
    }
  }

  // Encontrar um tweet por ID
  async findTweetById(id) {
    try {
      console.log("\n\n\ninfo: Iniciado TweetRepository.findTweetById", id); // Debug

      const [rows] = await database.query(
        "SELECT * FROM tb_tweet WHERE id = ?",
        [id]
      );
      if (rows.length) {
        const { id, text, authorId, createdAt } = rows[0];
        return new TweetEntity(text, authorId, new Date(createdAt), id);
      }
      console.log("\n\n\ninfo: Finalizado TweetRepository.findTweetById", null); // Debug

      return null;
    } catch (error) {
      console.log("\n\n\nerror: Error ao encontrar o tweet:", error); // Debug
      throw new Error("Falha ao encontrar tweet");
    }
  }

  // Encontrar todos os tweets
  async findAllTweets() {
    try {
      console.log("\n\n\ninfo: Iniciado TweetRepository.findAllTweets"); // Debug

      const [rows] = await database.query("SELECT * FROM tb_tweet");

      console.log("\n\n\ninfo: Finalizado TweetRepository.findAllTweets", rows); // Debug

      return rows.map((row) => {
        const { id, text, authorId, createdAt } = row;
        return new TweetEntity(text, authorId, new Date(createdAt), id);
      });
    } catch (error) {
      console.log("\n\n\nerror: Error ao encontrar os tweets:", error);
      throw new Error("Falha ao encontrar tweets");
    }
  }

  // Encontrar tweets por autor
  async findTweetsByAuthorId(authorId) {
    try {
      console.log(
        "\n\n\ninfo: Iniciado TweetRepository.findTweetsByAuthorId",
        authorId
      ); // Debug

      const [rows] = await database.query(
        "SELECT * FROM tb_tweet WHERE authorId = ?",
        [authorId]
      );
      console.log(
        "\n\n\ninfo: Finalizado TweetRepository.findTweetsByAuthorId",
        rows
      ); // Debug

      return rows.map((row) => {
        const { id, text, authorId, createdAt } = row;
        return new TweetEntity(text, authorId, new Date(createdAt), id);
      });
    } catch (error) {
      console.log(
        "\n\n\nerror: Error ao encontrar os tweets por autor:",
        error
      ); // Debug
      throw new Error("Falha ao encontrar tweets por autor");
    }
  }
}