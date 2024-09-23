// const user = {
//         userName : "Ayush Jaiswal",
//         logicCount : 8,
//         singdIn : true,

//         getUserDetail : function(){
//                 // console.log("Got user details from data base");
//                 console.log(`userName : ${this.userName}`);
//         }
// }

// console.log(user.logicCount);
// console.log(user.getUserDetail());

function user(userName,logicCount,singdIn){
        this.userName=userName;
        this.logicCount=logicCount;
        this.singdIn=singdIn;

        return this;
}

        const userOne = new user("Ayush",4,true);
        const userTwo = new user("jaiswal",14,true);
        console.log(userOne);
        console.log(userTwo);

