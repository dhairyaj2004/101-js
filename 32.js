//" JSON "->used for transfering data between two applications
//two methods to work with json...
//1.Parse
let jsonData='{"name":"DJ","age":20,"city":"Dabhoi"}'//all in string we have to parse it
let data=JSON.parse(jsonData)
console.log(data)//{ name: 'DJ', age: 20, city: 'Dabhoi' }
//2.Stringify
let obj={
    "name":"ab",
    "age":20,
    "city":"Dabhoi"
}
let JSONstring=JSON.stringify(obj)
console.log(JSONstring)//{"name":"ab","age":20,"city":"Dabhoi"}