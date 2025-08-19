// For of
const arr = [1,2,3,4,5]

for (const i of arr) {
        // console.log(i);
}

const greetings = "Hello WOrld"
for (const greet of greetings) {
        // console.log(greet);
}

// MAP
const map =new Map()
map.set(`IN`,`India`)
map.set(`usa`,`America`)
map.set(`fr`,`france`)


for (const [key,value] of map) {
        // console.log(key,`=>`,value);
}

// for in

const myObject = {
        js : "javaScript",
        cpp : "C++"
}
for (const key in myObject) {
       console.log(`${key} is sortcut of ${myObject[key]}`);
}

const programming = ["js","cpp","py","java"]
for (const key in programming) {
//     console.log(programming[key]);
}


// **********************************************XXXX******************************
// forech
const coding = ["js","cpp","py","java"]
// coding.forEach(function (item){
//         console.log(item);
// })

// coding.forEach((item)=>{
//         console.log(item);
// })

// function printMe(item) {
//         console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,Arr)=>{
//         console.log(item,index,Arr);
// })

const myCoding=[
        {
                lanName : "javascript",
                fileName : "js"
        },
        {
                lanName : "java",
                fileName : "java"
        },
        {
                lanName : "cpp",
                fileName : "c++"
        }
]
myCoding.forEach((item)=> {
        console.log(item.fileName);
})