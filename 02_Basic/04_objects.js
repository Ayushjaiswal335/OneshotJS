// declaration of object 

// const tinderUser = new Object();   //singleton object

const tinderUser = {}    //non-singleton object

tinderUser.Id = "asd123"
tinderUser.name = "Ayush"
tinderUser.isLohhedin = false

// console.log(tinderUser);

const regularUser = {
        emai: "asfg@gmail.com",
        fullName:{
                userName:{
                        firstName:"Ayush",
                        lastNmae:"Jaiswal"
                }
        }
}
// console.log(regularUser.fullName.userName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);


// when we get the value from data base 
// Array Object

const user = [
        {
                id : "1",
                emai : "asdf@gmail.com"
        },
        {
                id : "2",
                emai : "asdf@gmail.com"
        },
        {
                id : "3",
                emai : "asdf@gmail.com"
        },
        {
                id : "4",
                emai : "asdf@gmail.com"
        },
]
// console.log(user[1].id);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLohhedin`));


const course = {
        courseName : "javaScript",
        price : "1200",
        courseTeacher : "LoveBubber"
}
// console.log(course.courseTeacher);

// const{courseName} = course
// const{price} = course
// console.log(courseName);
// console.log(price);

// const{courseTeacher:intructor} = course
// console.log(intructor);