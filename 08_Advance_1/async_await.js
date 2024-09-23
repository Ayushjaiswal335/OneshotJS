// function getData(){
// async function getData(){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                         resolve(455)
//                 }, 5000);
//         })
// }

async function getData(){
      let x =  fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = (await x).json()
        console.log(data);
        return data
}

async function main (){

console.log("first");
console.log("second");

console.log("load Data");

let data = await getData();

  console.log(data);

  console.log("Process data");

  console.log("second task");

}


main();
// data.then((value) => {
//   console.log(data);

//   console.log("Process data");

//   console.log("second task");
// })