//Promises in js
let pizzaOrder=new Promise((resolve,reject)=>{
    let baked=true;
    if(baked){
        resolve("Pizza is Baked");
        }else{
            reject("Sorry Pizza is not Baked");
            }
});
pizzaOrder.then((message)=>console.log(message))//if resolves this will be executed
.catch((error)=>console.log(error));//if reject this will be executed
//2)another example
let myPromises=new Promise((resolve, reject) => {
    let AllPromises=false;
    setTimeout(()=>{
        if(AllPromises){
        resolve("AllPromises resolved")
        } else {
            reject("Sorry Better luck next time");
        }
    },2000);
    
});
myPromises
.then((message)=>console.log(message));
// .catch((error)=>console.log(error));
//21.js is in 16.js so refer it