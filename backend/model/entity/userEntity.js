export class UserEntity{
    constructor(username, email , password, id = null ){
        this.id = id
        this.username = username;
        this.email = email;
        this.password = password;
    }

}


