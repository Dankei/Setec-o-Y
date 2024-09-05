import { TweetRepository } from "../repository/tweetRepository.js";

const tweetRepository = new TweetRepository();

export class TweetService {

  async createTweet(tweet) {
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

      // Verifica a data de criação do tweet
      if (!tweet.createdAt || isNaN(new Date(tweet.createdAt).getTime())) { 
        tweet.createdAt = new Date(); // Se veradeiro, use a data atual
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
