// synchronous
// function one() {
//         console.log("First");
// }
// function two() {
//         console.log("Second");
// }
// one()
// two()


// Asynchronous
// setTimeout(()=>{
//         console.log("THird");
// },5000)
// function one() {
//         console.log("First");
// }
// function two() {
//         console.log("Second");
// }
// one()
// two()

// let meraPromise1 = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//                 console.log("I am Inside Promise");
//         },5000)
//         // resolve(1234)
//         reject(new Error("Bhai Error aa gya hai")); 
// })
// console.log("First");

// let meraPromise2 = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//                 console.log("I am Inside Promise");
//         },5000)
//         // resolve (234); 
//         reject(new Error("Bhai Error aa gya hai"));
// })
// meraPromise2.then((value)=>{
//         console.log(value)
// }).catch((error)=>{
//         console.log("Recived an Error");

// })

// console.log("First");


// let pehlaPromise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 console.log("SetTimeout Started");
//         },2000)
//         resolve();
// })
// pehlaPromise.then(()=>{
//         let dusraPromise = new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                         resolve("dusra promise resolved")
//                 }, 3000);
//         }) 
//         return dusraPromise
// }).then((value)=>{console.log(value)})



// async function abcd(){
//         return 7; 
// }
// abcd()  // always return promise



// await example 
// async function utility() {

//         let jharkhandWeather = new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve("raining in jharkhand")
//                 }, 1000);
//         })
//         let delhiWeather = new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve("cold in delhi")
//                 }, 5000);
//         })
//         let jW = await jharkhandWeather;
//         let dW = await delhiWeather;

//         return [jW,dW]
// }
// utility(); 


// fetch api (get)
// async function utility() {
// let content =await fetch('https://jsonplaceholder.typicode.com/todos/1')
// let output =await content.json();
// console.log(output);
// }
// utility();

// async function helper() {
//         let options = {
//                 method: 'POST',
//                 body: JSON.stringify({
//                         title: 'Ayush',
//                         body: 'healthy body',
//                         userId: 1,
//                         waight:70,
//                 }),
//                 headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                 },
//         }

//         let content = await fetch('https://jsonplaceholder.typicode.com/posts',options)
//         let response =await content.json()
//         return response
// }

// async function utility() {
//         let answer =await helper();
//         console.log(answer);
// }
// utility()


// closer 
// function makeFunc() {
//         const name = "Mozilla";
//         function displayName() {
//           console.log(name);
//         }
//         return displayName;
//       }
      
//       const myFunc = makeFunc();
//       myFunc();


// classes and export module in js