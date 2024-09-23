const promiseOne = new Promise((resolve, reject) => {
        // Do an Async task
        // DataBase calls,cryptography,network

        setTimeout(() => {
                console.log("Async task is complete");
                resolve();
        }, 1000);
});
promiseOne.then(() => {
        console.log("Promise consume");
})


new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("Async task two is complete");
                resolve();
        }, 1000);
}).then(() => {
        console.log("Async 2 resolved ");
})


const promiseThree = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({userName:"Ayush Jaiswal",email:"xyz@gmail.com"});
        }, 1000);
})

promiseThree.then((user)=>{
        console.log(user);
});


const promiseFour = new Promise((resolve,reject)=>{
        setTimeout(() => {
                let error = false;
                if (!error) {
                        resolve({userName:"jaiswal",password: "123"})
                }else{
                        reject('ERROR : Something went wrong')
                }
        }, 1000);
})

promiseFour.then((user)=>{
        console.log(user);
        return user.userName;
}).then((userName)=>{
        console.log(userName);
}).catch((error)=>{
        console.log(error);
}).finally(() => console.log("the promise is either resolve or rejected"))



const promiseFive = new Promise((resolve,reject)=>{
        setTimeout(() => {
                let error = true;
                if (!error) {
                        resolve({userName:"sainty",password: "123"})
                }else{
                        reject('ERROR : Something on promiseFive is went wrong')
                }
        }, 1000);
});

async function consumePromiseFive(){      
        try{
                const response= await promiseFive 
                console.log(response);
        }
        catch{
                console.log("error");
        }
}

consumePromiseFive();


// async function getAllUser(){
//         try {
//                const response = await fetch('https://randomuser.me/api/')
//         //        console.log(response);

//                const data = await response.json()
//                console.log(data);
//         } 
//         catch (error) {
//                 console.log("E: ", error);
//         }
// }

// getAllUser();

fetch('https://randomuser.me/api/')
.then((response)=>{
        return response.json()
})
.then((data)=>{
        console.log(data);
})
.catch((Error) =>{
        console.log(Error);
})