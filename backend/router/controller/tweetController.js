import { TweetEntity } from '../../model/entity/tweetEntity.js';
import { TweetService } from '../../model/service/tweetService.js';

const tweetService = new TweetService();

export class TweetController {

  // Criar um novo tweet
  async createTweet(request, response) {
    const { text, authorId, createdAt } = request.body;
    console.log(text, authorId, createdAt);

    try {
      const tweet = new TweetEntity(text, authorId, new Date(createdAt));
      console.log(tweet);
      const result = await tweetService.createTweet(tweet);
      response.status(201).json(result);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar um tweet por ID
  async findTweetById(request, response) {
    const { id } = request.params;
    console.log(id);

    try {
      const result = await tweetService.findTweetById(id);
      if (result) {
        response.status(200).json(result);
      } else {
        response.status(404).json({ message: 'Tweet not found' });
      }
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar todos os tweets
  async findAllTweets(request, response) {
    try {
      const result = await tweetService.findAllTweets();
      response.status(200).json(result);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar tweets por autor
  async findTweetsByAuthorId(request, response) {
    const { authorId } = request.params;
    console.log(authorId);

    try {
      const result = await tweetService.findTweetsByAuthorId(authorId);
      response.status(200).json(result);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}
