//SHALLOW and DEEP copy in Js
let original={
    name:"DJ",
    age:19,
    hobbies:[
        "cricket",
        "tech"
    ],
    location:{
        city:"baroda",
        native:"Dabhoi"
    }
}
let shallow={...original}
shallow.location.city="vadodara"
console.log(original)
let deep=JSON.parse(JSON.stringify(original))//parse and stringify is needed for deep copy
deep.location.native="Darbhavati"
console.log(deep) 
console.log(original)
//30.js is theory so jump to 31.js
//deep makes new and shallow changes in original