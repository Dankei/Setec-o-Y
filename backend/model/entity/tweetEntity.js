export class TweetEntity {
  constructor(text, authorId, createdAt = new Date(),// Valor padrão da data atual
    id = null) {
    this.id = id;
    this.text = text;
    this.authorId = authorId;
    this.createdAt = createdAt;
  }
}
