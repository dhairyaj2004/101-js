//This keyword
'use strict';
function ThisKey(){
    console.log(this)
}
ThisKey()//undefined if we use use strict but if we dont then value refers to window object

//this keyword for objects...
let entered=prompt("Enter your born year");//prompt is function of vanilla js so it will only works in engines like chrome v8
const person = {
    year:entered,
    calcAge:function calcAge(){
        console.log(2023-this.year)//this refers to year variable of this object
    }
}
person.calcAge();//returns age
//this keyword for event
<button id="my">
button
</button>
document.getElementById('my').addEventListener('click',function(){
    console.log(this);//it will show the button element because it is inside the event listener so 'this' now refers to that particular clicked
})