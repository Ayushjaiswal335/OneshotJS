// Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());

// ************Output****************
// Thu Apr 11 2024 22:21:55 GMT+0530 (India Standard Time)
// Thu Apr 11 2024
// 2024-04-11T16:51:55.001Z
// Thu, 11 Apr 2024 16:51:55 GMT
// 2024-04-11T16:51:55.001Z
// 11/4/2024
// 10:21:55 pm
// 11/4/2024, 10:21:55 pm
// 22:21:55 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date(2022,3,11)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2022,3,11,3,34)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2022-01-30")
let myCreatedDate = new Date("01-30-2022")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());

newDate.toLocaleString(`default`,{
        weekday: "long",
})