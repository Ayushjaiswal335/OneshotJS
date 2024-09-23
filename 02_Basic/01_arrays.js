// Array

const myArr = [0,1,2,3,4,5]
const myHero = ["Shaktiman","naagraj"]

const arr = new Array(1,2,3,4,5)

// console.log(myArr[2]);

// Methods
// myArr.push(6) // add value in end
// myArr.push(7)
// myArr.pop() //delete value in end

// myArr.unshift(8) //add value in start
// myArr.shift(8)   //delete value in start

// console.log(myArr.includes(9));   //is 9 present or not
// console.log(myArr.indexOf(2));
// console.log(myArr);

// const newArr = myArr.join("-")  //its make its type is string
// console.log(newArr);

// slice,splice

console.log("A",myArr);
const n1 = myArr.slice(1,3)
console.log(n1);
console.log("b",myArr);

const n2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(n2);

