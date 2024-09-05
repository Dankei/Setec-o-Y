export class ReplyEntity{
    constructor(id=null, text, userID, tweetID, replyID=null){
    
        this.id = id;
        this.text = text;
        this.userID = userID;
        this.tweetID = tweetID;
        this.replyID = replyID;
    }
}