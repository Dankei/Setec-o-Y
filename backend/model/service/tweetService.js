import { TweetRepository } from "../repository/tweetRepository.js";

const tweetRepository = new TweetRepository();

export class TweetService {

  async createTweet(tweet) {
    try {

      //Validação de dados temporárias 

      // Verifique se o texto do tweet não está vazio
      if (!tweet.text || tweet.text.trim() === '') {
        throw new Error('Tweet text cannot be empty');
      }

      // Verifique se o autor do tweet existe (opcional)
      const authorExists = await userRepository.findUserById(tweet.authorId);
      if (!authorExists) {
        throw new Error('Author does not exist');
      }

      return await tweetRepository.createTweet(tweet);
    } catch (error) {
      console.error('Error creating tweet:', error);
      throw new Error('Failed to create tweet');
    }
  }

  async findTweetById(id) {
    try {
      return await tweetRepository.findTweetById(id);
    } catch (error) {
      console.error('Error finding tweet by ID:', error);
      throw new Error('Failed to find tweet');
    }
  }

  async findAllTweets() {
    try {
      return await tweetRepository.findAllTweets();
    } catch (error) {
      console.error('Error finding all tweets:', error);
      throw new Error('Failed to find tweets');
    }
  }

  async findTweetsByAuthorId(authorId) {
    try {
      return await tweetRepository.findTweetsByAuthorId(authorId);
    } catch (error) {
      console.error('Error finding tweets by author ID:', error);
      throw new Error('Failed to find tweets by author');
    }
  }
}
