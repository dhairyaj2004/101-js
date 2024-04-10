//OBJECT DESTRUCTURING
//ES6 introduced a new way to access the properties of an object. It allows us to extract data from objects into variables.
const user={
    name:'john',
    id:123,
    email:"john@gmail.com"
}
console.log(user.name)//logged out john
//inspite of this, we can also save all properties into variables 
let{id:rollno,name,email,dob="Not given"}=user;//here we assign id to rollno and dob to not given
console.log(name,rollno,email,dob)//john 123 john@gmail.com Not given