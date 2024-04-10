//Intl API in js
//The Intl() method is used to format strings, numbers, dates, and times in local format with the help of constructors.
//for currency
let {format}=new Intl.NumberFormat('hi-In',{
    style:'currency',
    currency:'INR'
})
console.log(format(1500000))//₹15,00,000.00
//for date
// let {format}=new Intl.DateTimeFormat('hi-In')
// console.log(format())