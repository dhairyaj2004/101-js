//'DATES' in JavaScript
let dates=new Date()
console.log(dates)//get current date
//
let specificDate=new Date(2025,0,20);
console.log(specificDate);//2023-01-19T18:30:00.000Z
console.log("month:",specificDate.getMonth()+' '+"date:",specificDate.getDate());//month: 0 date: 20->month 0 means Jan and month 11 means Dec