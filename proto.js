//proto in js
let obj={
    fname:'Dhairya'
};
let obj2={
    lname:'Shah'
};
obj2.__proto__=obj;//this will check fname in obj2 if not find then check in obj
console.log(obj2.lname+" "+obj2.fname);
