import { LikeEntity } from '../../model/entity/likeEntity.js';
import { LikeService } from '../../model/service/likeService.js';

const likeService = new LikeService();

export class LikeController{

    async createLike (request, response) {
        console.log("\n\n\ninfo: Iniciado LikeController.createLike", request.body);
        const { userID, tweetID } = request.body;

        try {

            const like = new LikeEntity(userID, tweetID);
            const result = await likeService.createLike(like);

            console.log("\n\n\ninfo: Finalizado LikeController.createLike", result);
            response.status(201).json(result);

            
        } catch (error) {
            console.log("\n\n\nerror: LikeController.createLike", error);
            response.status(400).json({ message: error.message });
        }

    }
}