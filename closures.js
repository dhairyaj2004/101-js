//CLOSURES
//a closure gives you access to an outer function's scope from an inner function
function outerFunction(multiplier) {
    return function innerFunction(number){
        console.log( number*multiplier)//multiplier is from outer function
    }
    }
    let multiplyBy2 = outerFunction(2);
    multiplyBy2(5);  //10
//for more good user experience u can write like below but prompt will not work in vs code so u have to use chrome v8
// let ques1=prompt("enter the number you want to multiply with")
// let multiplier=outerFunction(ques1)
// let ques2=prompt("enter the number you want to multiply")
// let number=multiplier(ques2)