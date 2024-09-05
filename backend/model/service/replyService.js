import { ReplyRepository } from "../repository/replyRepository";

const replyRepository = new ReplyRepository();

export class ReplyService {

    createReply(reply) {
        console.log("\n\n\ninfo: Iniciado ReplyService.createReply", reply);

        //Regra para salvar reply

        console.log("\n\n\ninfo: Finalizado ReplyService.createReply", reply);
        return replyRepository.createReply(reply);
    }
}