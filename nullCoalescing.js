//NULL COALESCING OPERATOR->logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.
let guests=0;
let numguests=guests||10;
console.log(numguests)//10 
//so here 0 is also can be a valid value but or operator will never print 0 so for this null coalescing operator is used
let guests1=0;
let numguests1=guests1??10;
console.log(numguests1)//still null and undefined never be printed it will print default which is 10 if guests1=null/undefined