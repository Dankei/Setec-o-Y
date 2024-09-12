import { TweetRepository } from "../repository/tweetRepository.js";
import { UserRepository } from "../repository/userRepository.js";
import { log } from "../../log/logger.js";


const userRepository = new UserRepository();
const tweetRepository = new TweetRepository();

export class TweetService {
  async createTweet(tweet) {
    log.trace("Iniciado TweetService.createTweet");

    try {


      const authorExists = await userRepository.findUserById(tweet.authorID);
      if (!authorExists) {
        log.error("Author does not exist");
        throw new Error('Author does not exist');
      }

      // Verifique se o texto do tweet não está vazio
      if (!tweet.text || tweet.text.trim() === "") {
        log.error("Empty text");
        throw new Error("Texto vazio");
      }

      log.trace("Finalizado TweetService.createTweet");
      return await tweetRepository.createTweet(tweet);
    } catch (error) {
      log.error("TweetService.createTweet", error.message);
      throw new Error("Failed to create tweet");
    }
  }

  async deleteTweet(id) {
    log.trace("Iniciado TweetService.deleteTweet");

    try {
      log.trace("Finalizado TweetService.deleteTweet");
      return await tweetRepository.deleteTweet(id);
    } catch (error) {
      log.error("TweetService.deleteTweet", error.message);
      throw new Error("Failed to delete tweet");
    }
  }

  async findTweetById(id) {
    log.trace("Iniciado TweetService.findTweetById");
    try {
      log.trace("Finalizado TweetService.findTweetById");
      return await tweetRepository.findTweetById(id);
    } catch (error) {
      log.error("TweetService.findTweetById", error.message);
      throw new Error("Failed to find tweet");
    }
  }

  async findAllTweets() {
    log.trace("Iniciado TweetService.findAllTweets");
    try {
      log.trace("Finalizado TweetService.findAllTweets");
      return await tweetRepository.findAllTweets();
    } catch (error) {
      log.error("TweetService.findAllTweets", error.message);
      throw new Error("Failed to find tweets");
    }
  }

  async findTweetsByauthorID(authorID) {
    log.trace("Iniciado TweetService.findTweetsByauthorID");
    try {
      log.trace("Finalizado TweetService.findTweetsByauthorID");
      return await tweetRepository.findTweetsByauthorID(authorID);
    } catch (error) {
      log.error("TweetService.findTweetsByauthorID", error.message);
      throw new Error("Failed to find tweets by author");
    }
  }
}
