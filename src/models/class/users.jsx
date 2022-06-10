export class Users{
    userId ;
    name = "";
    company = "";
    surname = "";
    email = "";
    password = "";
    confirmPass = "";

    constructor(userId,name,surname,company,email,password,confirmPass){
        this.userId=userId
        this.name=name
        this.surname=surname
        this.company=company
        this.email=email
        this.password=password
        this.confirmPass=confirmPass
    }


}