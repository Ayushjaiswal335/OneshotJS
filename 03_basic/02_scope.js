
var c = 300
if(true){
        let a =10 
        const b = 20
        var c= 30
}


// console.log(c);

function one(){
       const userName = "Ayush"

        function two(){
                const site = "youtube"
                // console.log(userName);
        }
        // console.log(site); //we cant access site
        two()
}
// one()

// console.log(addOne(4));
function addOne(num){
        return num+1;
}

// we Cant access this function in this formate 
// console.log(addTwo(3));
// const addTwo=function (num){
//         return num+2;
// }