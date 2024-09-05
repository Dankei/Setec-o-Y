export class UserEntity{
    constructor(userename, email , senha, id = null ){
        this.id = id
        this.userename = userename;
        this.email = email;
        this.senha = senha;
    }
}


