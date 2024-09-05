export class UserEntity{
    constructor(username, email , senha, id = null ){
        this.id = id
        this.username = username;
        this.email = email;
        this.senha = senha;
    }
}


