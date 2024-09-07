//entidade token
export class TokenEntity {
    constructor(id,token, userId, expiresAt) {
        this.id = id;
        this.token = token;
        this.userId = userId;
        this.expiresAt = expiresAt;
    }
}