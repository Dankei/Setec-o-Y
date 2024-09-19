import { TweetRepository } from "../repository/tweetRepository.js";
import { UserRepository } from "../repository/userRepository.js";
import { log } from "../../log/logger.js";


const userRepository = new UserRepository();
const tweetRepository = new TweetRepository();

export class TweetService {
 
  // Inicio da task












  

  // Fim da task




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
