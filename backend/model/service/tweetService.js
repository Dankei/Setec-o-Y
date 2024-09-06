import { TweetRepository } from "../repository/tweetRepository.js";

const tweetRepository = new TweetRepository();

export class TweetService {

  async createTweet(tweet) {
    console.log("\n\n\ninfo: Iniciado TweetService.createTweet", tweet); // Debug

    try {

      //Validação de dados temporárias 

      // // Verifique se o autor do tweet existe (inativo ate os user estarem cadastrados)
      // const authorExists = await userRepository.findUserById(tweet.authorId);
      // if (!authorExists) {
      //   throw new Error('Author does not exist');
      // }

      // Verifique se o texto do tweet não está vazio
      if (!tweet.text || tweet.text.trim() === '') {
        throw new Error('Texto vazio');
      }


      console.log("\n\n\ninfo: Finalizado TweetService.createTweet", tweet); // Debug
      return await tweetRepository.createTweet(tweet);
    } catch (error) {
      console.log("\n\n\nerror: TweetService.createTweet", error); // Debug
      throw new Error('Failed to create tweet');
    }
  }

  async findTweetById(id) {
    console.log("\n\n\ninfo: Iniciado TweetService.findTweetById", id); // Debug
    try {
      console.log("\n\n\ninfo: Finalizado TweetService.findTweetById", id); // Debug
      return await tweetRepository.findTweetById(id);
    } catch (error) {
      console.log("\n\n\nerror: TweetService.findTweetById", error); // Debug
      throw new Error('Failed to find tweet');
    }
  }

  async findAllTweets() {
    console.log("\n\n\ninfo: Iniciado TweetService.findAllTweets"); // Debug
    try {
      console.log("\n\n\ninfo: Finalizado TweetService.findAllTweets"); // Debug
      return await tweetRepository.findAllTweets();
    } catch (error) {
      console.log("\n\n\nerror: TweetService.findAllTweets", error); // Debug
      throw new Error('Failed to find tweets');
    }
  }

  async findTweetsByAuthorId(authorId) {
    console.log("\n\n\ninfo: Iniciado TweetService.findTweetsByAuthorId", authorId); // Debug
    try {
      console.log("\n\n\ninfo: Finalizado TweetService.findTweetsByAuthorId", authorId); // Debug
      return await tweetRepository.findTweetsByAuthorId(authorId);
    } catch (error) {
      console.log("\n\n\nerror: TweetService.findTweetsByAuthorId", error); // Debug
      throw new Error('Failed to find tweets by author');
    }
  }
}
