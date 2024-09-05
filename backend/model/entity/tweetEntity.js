export class TweetEntity {
  constructor(text, authorId, createdAt = new Date(),id = null) {
    this.id = id;
    this.text = text;
    this.authorId = authorId;
    this.createdAt = createdAt;
  }
}
