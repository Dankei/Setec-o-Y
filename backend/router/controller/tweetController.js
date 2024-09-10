import { TweetEntity } from "../../model/entity/tweetEntity.js";
import { TweetService } from "../../model/service/tweetService.js";

const tweetService = new TweetService();

export class TweetController {
  // Criar um novo tweet
  async createTweet(request, response) {
    console.log(
      "\n\n\ninfo: Iniciado TweetController.createTweet",
      request.body
    ); // Debug

    const { text, authorId } = request.body;
    console.log("\n Dados: ", text, authorId); // Debug

    try {
      const tweet = new TweetEntity(text, authorId);
      console.log(tweet);
      const result = await tweetService.createTweet(tweet);

      console.log(
        "\n\n\ninfo: Finalizando TweetController.createTweet",
        request.result
      ); // Debug
      response.status(201).json(result);
    } catch (error) {
      console.log("\n\n\nerror: TweetController.createTweet", error); // Debug
      response.status(400).json({ message: error.message });
    }
  }

  // Deletar um tweet
  async deleteTweet(request, response) {
    console.log(
      "\n\n\ninfo: Iniciado TweetController.deleteTweet",
      request.body
    ); // Debug
    const { id } = request.params;
    console.log(id);

    try {
      const result = await tweetService.deleteTweet(id);
      if (result) {
        console.log(
          "\n\n\ninfo: Finalizando TweetController.deleteTweet",
          request.result
        ); // Debug
        response.status(200).json(result);
      } else {
        response.status(404).json({ message: "Tweet not found" });
      }
    } catch (error) {
      console.log("\n\n\nerror: TweetController.deleteTweet", error); // Debug
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar um tweet por ID
  async findTweetById(request, response) {
    console.log(
      "\n\n\ninfo: Iniciado TweetController.findTweetById",
      request.body
    ); // Debug
    const { id } = request.params;
    console.log(id);

    try {
      const result = await tweetService.findTweetById(id);
      if (result) {
        console.log(
          "\n\n\ninfo: Finalizando TweetController.findTweetById",
          request.result
        ); // Debug
        response.status(200).json(result);
      } else {
        response.status(404).json({ message: "Tweet not found" });
      }
    } catch (error) {
      console.log("\n\n\nerror: TweetController.findTweetById", error); // Debug
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar todos os tweets
  async findAllTweets(request, response) {
    console.log(
      "\n\n\ninfo: Iniciado TweetController.findAllTweets",
      request.body
    ); // Debug
    try {
      const result = await tweetService.findAllTweets();
      console.log(
        "\n\n\ninfo: Finalizando TweetController.findAllTweets",
        request.result
      ); // Debug
      response.status(200).json(result);
    } catch (error) {
      console.log("\n\n\nerror: TweetController.findAllTweets", error); // Debug
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar tweets por autor
  async findTweetsByAuthorId(request, response) {
    console.log(
      "\n\n\ninfo: Iniciado TweetController.findTweetsByAuthorId",
      request.body
    ); // Debug
    const { authorId } = request.params;
    console.log(authorId);

    try {
      const result = await tweetService.findTweetsByAuthorId(authorId);
      console.log(
        "\n\n\ninfo: Finalizando TweetController.findTweetsByAuthorId",
        request.result
      ); // Debug
      response.status(200).json(result);
    } catch (error) {
      console.log("\n\n\nerror: TweetController.findTweetsByAuthorId", error); // Debug
      response.status(400).json({ message: error.message });
    }
  }
}
