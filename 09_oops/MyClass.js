// class user{
//         constructor(userName,email,password){
//                 this.userName =userName
//                 this.email=email
//                 this.password=password
//         }
//         encryptPassword(){
//                 return `${this.password}abc`
//         }
// }

// const chai = new user('Ayush',"abc@gmail.com",12345)
// console.log(chai.encryptPassword());

function user1(userName,email,password){
        this.userName =userName
        this.email=email
        this.password=password
}

user.prototype.encryptPassword = function(){
        return `${this.password}abc`
}

const tea = new user1('jaiswal',"abc@gmail.com",345)
console.log(tea.encryptPassword());
