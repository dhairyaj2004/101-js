//LOCAL STORAGE->browser side storage where you can store 5MB of data maximum in the form of key:value
//local storage store data in form of string so during storing the object or array we have to stringify it
//u have to run code in v8 engine 
const user={
    name:"dj",
    age:20,
    city:"Dabhoi"
}
//serialize the object and store it
localStorage.setItem('user',JSON.stringify(user));
//for retriving we use parse so that that stringified data will also converted into object
const data=localStorage.getItem('user')
const retrivedData=JSON.parse(data)
console.log(retrivedData)
