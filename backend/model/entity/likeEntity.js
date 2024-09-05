export class LikeEntity{
    constructor(id, userID, id_tweetID){
        this.id = id;
        this.userID = userID;
        this.id_tweetID = id_tweetID;
        this.createdAT = new Date();
    }
}