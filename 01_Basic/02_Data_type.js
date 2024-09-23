"use strict" // treat all js code as newer version

let name  = "Ayush"
let age = 22
let isLoggedIn = false

// premitive data type 
// number,bigint,string,boolean,null,undefined,symbol=>uniqe

// non-premitive data type (reference type)
// array,objects,function

let id = Symbol("123")
let newId = Symbol("123")

console.log(id===newId);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null); //return object



// **********************Memory**************************

// stack =>premitive data type ,its give you the copy of the variable we defined
// heap =>non-premitive data type , its give you the reference