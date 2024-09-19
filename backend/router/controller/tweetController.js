import { TweetEntity } from "../../model/entity/tweetEntity.js";
import { TweetService } from "../../model/service/tweetService.js";
import { log } from "../../log/logger.js";

const tweetService = new TweetService();

export class TweetController {
 //Inicio da Task


















 





 //Final da Task

  // Deletar um tweet
  async deleteTweet(request, response) {
    log.info("Feito request na rota /tweets/:id");
    log.trace("Iniciado TweetController.deleteTweet");

    const { id } = request.params;

    try {
      const result = await tweetService.deleteTweet(id);
      if (result) {
        log.success("Finalizado request com sucesso");
        response.status(200).json(result);
      } else {
        response.status(404).json({ message: "Tweet not found" });
      }
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  // Encontrar um tweet por ID
  async findTweetById(request, response) {
    log.info("Feito request na rota /tweets/:id");
    log.trace("Iniciado TweetController.findTweetById");

    const { id } = request.params;

    try {
      const result = await tweetService.findTweetById(id);
      if (result) {
        log.success("Finalizado request com sucesso");
        response.status(200).json(result);
      } else {
        response.status(404).json({ message: "Tweet not found" });
      }
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }

  

  // Encontrar tweets por autor
  async findTweetsByauthorID(request, response) {
    log.info("Feito request na rota /tweets/author/:authorID");
    log.trace("Iniciado TweetController.findTweetsByauthorID");


    const { authorID } = request.params;

    try {
      const result = await tweetService.findTweetsByauthorID(authorID);
      log.success("Finalizado request com sucesso");
      response.status(200).json(result);
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}
