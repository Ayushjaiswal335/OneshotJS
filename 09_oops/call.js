function setUserName(userName){
        this.userName=userName
}

function createUser(userName,email,pass){
        setUserName.call(this,userName)

        this.email=email
        this.pass=pass
}

const user = new createUser("ayush","xud@gamil.com",1234)
console.log(user);