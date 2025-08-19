const coding = ["js","cpp","py","java"]

// const values = coding.forEach((item) => {
//         console.log(item);
// })


//Filter

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter ((num) => {
//        return num > 4   
// })
// console.log(newNums);

// const newNum = []

// myNums.forEach((num) => {
//         if (num>5) {
//                 newNum.push(num)
//         }
// })
// console.log(newNum);
// *************************************************************
// map()
// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num) => num+10)
// console.log(newNums);

//chaining

// const newNum = myNumbers.map((num)=> num*10).filter((num)=> num>30)
// console.log(newNum);

// reduce
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const total = myNumbers.reduce((accumulater = 0,currentValue)=>{
//         return accumulater+currentValue
// })

// const total = myNumbers.reduce((accumulater ,currentValue)=>{
//         return accumulater+currentValue
// },1)

// console.log(total);

const shopingCart = [
        {
                itemNmae : "JavaScript",
                Price : 2999
        },
        {
                itemNmae : "Java",
                Price : 999
        },
        {
                itemNmae : "c++",
                Price : 1999
        },
        {
                itemNmae : "frontend",
                Price : 2000
        }
]
const total = shopingCart.reduce((accumulater,item)=> {
        return item.Price + accumulater
},0)

console.log(total);