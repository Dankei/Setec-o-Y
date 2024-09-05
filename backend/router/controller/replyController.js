import { ReplyEntity } from "../../model/entity/replyEntity.js";
import { ReplyService } from "../../model/service/replyService.js";

const replyService = new ReplyService();

export class ReplyController {

    async createReply(request, response) {
        console.log("\n\n\ninfo: Iniciado ReplyController.createReply", request.body);
        const { text, userID, tweetID, replyID } = request.body;

        try {

            const reply = new ReplyEntity(text, userID, tweetID, replyID);
            const result = await replyService.createReply(reply);

            console.log("\n\n\ninfo: Finalizado ReplyController.createReply", result);
            response.status(201).json(result);

            
        } catch (error) {
            console.log("\n\n\nerror: ReplyController.createReply", error);
            response.status(400).json({ message: error.message });
        }

    }


}