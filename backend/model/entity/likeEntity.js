export class LikeEntity{
    constructor(userID, tweetID){
        this.id = null;
        this.userID = userID;
        this.tweetID = tweetID;
        this.createdAT = new Date();
    }
}