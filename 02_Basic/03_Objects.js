// objects Literals

const mysym =Symbol("key1")

const user1 = {
        name : "Ayush Jaiswal",
        [mysym]:"mykey1",
        age : 22,
        isStudent: true,
        lastLoggin : ["Monday","Friday"]
}
// console.log(user1.name);
// console.log(user1["name"]);
// console.log(user1[mysym]);

// user1.name = "Ayush Kumar"
// console.log(user1.name);

// Object.freeze(user1)  //now we cant change any value in user1
// user1.name = "Sainty Kumar"
// console.log(user1.name);

user1.greeting = function(){
        console.log("hello users");
}
user1.greeting2 = function(){
        console.log(`hello user ${this.name}`);
}
user1.greet = function(){
        console.log("hello");
}
console.log(user1);
// console.log(user1.greeting());
// console.log(user1.greeting2());
// console.log(user1.greet());