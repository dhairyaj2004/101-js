//" TERNARY OPERATOR"
let register=true
let login=register?"welcome user!!!":"please register once"
console.log(login)//welcome user!!!
//example 2
let click=false
function submit(){
    let a=click?"please check the details you can only submit once":"please fill required field"
    console.log(a)
}
submit()