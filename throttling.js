//"THROTTLING" in Javascript.
//Throttling helps us to improve user experience and performance of app...
//for e.g imagine a game where user can fire a gun one time in one sec but if user fired multiple time in one sec  then our logic will be disturbed
//so for these type of situation we use throttling
let canFire=true;
function Fire(){
    if(canFire){
        console.log("fired!");
        canFire = false;
        setTimeout(()=>{
            canFire= true;
        },1000);
    }
    else{
        console.log('Reloading the gun!!!');
    }
}
//we are setting interval for executing the function multiple times after specific amount of time here that time is 0.5 sec so after each 0.5
//sec function will be executed but we are limit execution for 10 times...if we not mention limit and clearinterval then it will execute infinite
let firegun=1;
const interval = setInterval(() => {
    Fire(); 
    if(firegun!=10){
        firegun++;     
    }
    else{
        clearInterval(interval)
    }
},500);
//jump to 14.js