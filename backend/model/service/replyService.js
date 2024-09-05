import { ReplyRepository } from "../repository/replyRepository";

const replyRepository = new ReplyRepository();

export class ReplyService {

    createReply(reply) {
        console.log("\n\n\ninfo: Iniciado ReplyService.createReply", reply);

        //Regra para salvar reply

        
        // Garantindo que replyID seja null caso não seja informado
        const replyIDValue = reply.replyID !== undefined && reply.replyID !== '' ? reply.replyID : null;
        reply.replyID = replyIDValue;

        console.log("\n\n\ninfo: Finalizado ReplyService.createReply", reply);
        return replyRepository.createReply(reply);
    }
}