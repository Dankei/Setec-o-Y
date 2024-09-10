export class TweetEntity {
  constructor(text, authorID, createdAt = new Date(),id = null) {
    this.id = id;
    this.text = text;
    this.authorID = authorID;
    this.createdAt = createdAt;
  }
}
