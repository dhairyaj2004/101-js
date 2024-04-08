//Class
class person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Hello "+this.name);
    }
   
} 
let user=new person("Dhairya",20)
user.greet()
console.log(user)
//By using class we can make prototyping easy refer 50.js