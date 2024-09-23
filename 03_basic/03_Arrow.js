const user = {
        userName : "Ayush",
        price: 999,
        
        welcomeMessage : function(){
                console.log(`${this.userName},welcome user.`);
                // console.log(this);
        }
}
// user.welcomeMessage();
// user.userName = "Sainty"
// user.welcomeMessage()


// function one(){
//         let userName = "Ayush"
//         console.log(this.userName); //we can't, this here we use this in object 
// }
// one()

// const One = function(){
//         let userName = "Ayush"
//         console.log(this.userName); 
// }
// One()

const One = () => {
        let userName = "Ayush"
        console.log(this.userName); 
}
// One()

// const addSum = (num1,num2) => {
//         return num1+num2
// }
// const addSum = (num1,num2) =>  (num1+num2)

const addSum = (num1,num2) =>  ({userName : "Ayush"})

console.log(addSum(7,4));