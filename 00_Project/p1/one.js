// call back
let courses = [
        {no:1,name:"Ayush"},
        {no:1,name:"rahul"}
]

let course = courses.find((course)=>(course.name ==='Ayush'))
// console.log(course);

function hello(callback){
        console.log("Hello");
        callback();
}
// call back
function bye(){
        console.log("Bye");
}

// hello(bye)
// example 2
// function sum(callback,a,b){
sum(displayPage,3,5)

function sum(callback,a,b){
        let sum = a+b;
        callback(sum);
}
function display(sum){
        console.log("Sum is:",sum);
}

function displayPage(sum){
        document.getElementById("one").textContent = sum
}

// use of argument
function sum(a,b){
        let total = 0;
        for(let value of arguments){
                total += value
        }
        return total;
}

let result = sum(2,5,4,6,4);
console.log(result)