// Finding Elements in an Array
const user=[
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Alice"}
]

//Method 1-For loop
function checkUser(name,user){
    let exist=false;
    for(let i=0;i<user.length;i++){
     if(user[i].name===name){
        exist=true;
        break;
     }
    }
    return exist;
}
console.log(checkUser("John",user));//true
console.log(checkUser("Johny",user));//false

//Method 2-arr.some method
function checkUserSome(name,user) {
    return user.some((user)=> user.name === name);//(user)=> user.name is syntax
}//some returns boolean value
console.log(checkUserSome("John",user))//true