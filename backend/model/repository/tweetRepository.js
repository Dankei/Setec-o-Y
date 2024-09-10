import { database } from "../../database/database.js";
import { TweetEntity } from "../entity/tweetEntity.js";

export class TweetRepository {
  // Criando um novo tweet
  async createTweet(tweet) {
    try {
      console.log("\n\n\ninfo: Iniciado TweetRepository.createTweet", tweet); // Debug

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

  // Deletar um tweet
  async deleteTweet(id) {
    try {
      console.log("\n\n\ninfo: Iniciado TweetRepository.deleteTweet", id); // Debug

      const [result] = await database.query(
        "DELETE FROM tb_tweet WHERE id = ?",
        [id]
      );

      console.log("\n\n\ninfo: Finalizado TweetRepository.deleteTweet", result); // Debug

      return result.affectedRows > 0;
    } catch (error) {
      console.log("\n\n\nerror: Error ao deletar o tweet:", error); // Debug
      throw new Error("Falha ao deletar tweet");
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
        const { id, text, authorID, createdAt } = rows[0];
        return new TweetEntity(text, authorID, new Date(createdAt), id);
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
        const { id, text, authorID, createdAt } = row;

        return new TweetEntity(text, authorID, new Date(createdAt), id);
      });
    } catch (error) {
      console.log("\n\n\nerror: Error ao encontrar os tweets:", error);
      throw new Error("Falha ao encontrar tweets");
    }
  }

  // Encontrar tweets por autor
  async findTweetsByauthorID(authorID) {
    try {
      console.log(
        "\n\n\ninfo: Iniciado TweetRepository.findTweetsByauthorID",
        authorID
      ); // Debug

      const [rows] = await database.query(
        "SELECT * FROM tb_tweet WHERE authorID = ?",
        [authorID]
      );
      console.log(
        "\n\n\ninfo: Finalizado TweetRepository.findTweetsByauthorID",
        rows
      ); // Debug

      return rows.map((row) => {
        const { id, text, authorID, createdAt } = row;
        return new TweetEntity(text, authorID, new Date(createdAt), id);
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
