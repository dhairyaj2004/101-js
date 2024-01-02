//play with object and its methods
//object is a collection of properties/data members.
const colors={
    red:"#FF0000",
    green:"#008000",
    blue:"#0000FF"
}
console.log(Object.keys(colors))//logged the array of keys in object [ 'red', 'green', 'blue' ]
console.log(Object.values(colors));//logged the array of values in object [ '#FF0000', '#008000', '#0000FF' ]
//for getting the both object.entries is needed
console.log(Object.entries(colors))//logged out [ [ 'red', '#FF0000' ], [ 'green', '#008000' ], [ 'blue', '#0000FF' ] ]
// we got an array but for getting pure output we will use loop...
for(const color in colors){
    console.log(`color:${color}->hex:${colors[color]}`)
}