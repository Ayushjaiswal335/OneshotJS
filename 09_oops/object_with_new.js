function multiplyBy5( num) {
        return num*5;
}

multiplyBy5.power=2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(userName,score){
        this.userName=userName
        this.score=score
}

createUser.prototype.increment = function () {
        this.score++;
}

createUser.prototype.printMe = function(){
        console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",24)
const tea = new createUser("tea",240)

chai.printMe()