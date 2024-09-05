export class ReplyEntity{
    constructor(text, userID, tweetID,replyID=null, id=null){
    
        this.id = id;
        this.text = text;
        this.userID = userID;
        this.tweetID = tweetID;
        this.replyID = replyID;
    }
}