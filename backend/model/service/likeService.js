import { LikeRepository } from "../repository/likeRepository.js";

const likeRepository = new LikeRepository();

export class LikeService {

    createLike(like) {
        console.log("\n\n\ninfo: Iniciado LikeService.createLike", like);

        //Regra para salvar like

        console.log("\n\n\ninfo: Finalizado LikeService.createLike", like);
        return likeRepository.createLike(like);
    }
}