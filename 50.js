//prototype
//1)
function person(name,age){
    this.name=name;
    this.age=age;
}
person.prototype.greet=function(){
    console.log("Hello my name is ",this.name);
}
const person1=new person("DJ",20);
person1.greet();
//In this example, the greet method is added to the Person prototype. 
// Any object created using the Person constructor (like person1) will inherit the greet method.
//2)
function people(name,age){
    let people=Object.create(newobj)//lightweight prototyping where a new object is created based on an existing one.
    people.name=name;
    people.age=age;
    return people;
    
}

let newobj={
    greet(){
    console.log("Hello "+this.name)
}}
let user=people("DJ",20)
user.greet()
console.log(user)
//from the above 2) code we can write 1) with use of new keyword and prototyping concept