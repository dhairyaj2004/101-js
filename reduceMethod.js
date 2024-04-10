//The reduce() method returns a single value: the function's accumulated result
const cart=[
    {name:"Iphone",price:120000,quantity:1},
    {name:"Iphone-case",price:1000,quantity:2},
    {name:"Iphone-toughen",price:2000,quantity:2}
]
const total=cart.reduce((accumulator,item)=>{
    return accumulator+item.price*item.quantity
},0)//0 is accumulator or we can say initial value of cart
console.log(total);//126000