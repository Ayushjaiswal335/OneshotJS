
function sayMyName(){
        console.log("A");
        console.log("y");
        console.log("u");
        console.log("s");
        console.log("h");
}
// sayMyName();

// function addNumber(number1,number2){
//         console.log(number1+number2);
// }
// addNumber(4,5)

function addNumber(number1,number2){
        // let result = number1+number2;
        // return result;

        return number1+number2
}
// const result=addNumber(4,5)
// console.log(result);

function loginUserMessege(userNAme){
        return `${userNAme},just loggin`
}
let result = loginUserMessege("Ayush")
// console.log(result);

function calculateCartPrice(val1,...num1){
        return num1;
}
// console.log(calculateCartPrice(200,300,500,1000));

const user ={
        userNAme :"Ayush",
        price : 9099
}
const{userNAme}=user
function handleObject(user){
        console.log(`user name is ${userNAme} and price is ${user.price}`);
}

handleObject(user);

// handleObject({
//         userNAme:"Sainty",
//         price : 2000
// })

const myNewArray = [13,5,65,35]

function returnSecondValue(getArray){
        return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([13,5,65,35] ));