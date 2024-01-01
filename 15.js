//ARRAY DESTRUCTURING
//swapping variable using destructuting of an array
let x=10;
let y=15;
[x,y]=[y,x];
console.log(x);  // Outputs: 15 
console.log(y);  // Outputs: 10
//nested array destructuring
const arr=[1,[2,3]];
const [a,[b,c]]=arr;
console.log(a,b,c);   //1,2,3 ->returnig as single array
//returning multiple values from the function.
function foodie(starterIndex,maincourseIndex){
    let starterMenu=['panner tikka','malai tikka'];
    let mainMenu=['panner rajwadi','cheese chatpata','Roti']
    return [starterMenu[starterIndex],mainMenu[maincourseIndex]]
}
let [starter,mainCourse]=foodie(0,1)
console.log(starter,mainCourse)//panner tikka cheese chatpata