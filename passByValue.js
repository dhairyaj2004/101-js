//pass by value->works on primitive datatypes string,number,boolean etc
let myString="original";
function modification(myString){
    myString="changed";
    console.log(myString)
}
modification(myString);//changed
console.log(myString)//original
//inside function and outside function results are different which means myString pass the copy of itself to function.
// so myString will logged out original outside function and logged out changed inside function This is pass by value
//pass by Reference->works on objects
let myObj={property:'Original'}
function modified(myObj){
    myObj.property='Changed';
    console.log(myObj);
}
modified(myObj);//{ property: 'Changed' }
console.log(myObj);//{ property: 'Changed' }//if it is situated upper to function call then { property: 'Original' } logged
//In this original object is changing not it's copy...
