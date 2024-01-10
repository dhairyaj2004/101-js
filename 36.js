//Async Await
function makeTea(){
    console.log("boil the water")
    setTimeout(()=>{
        console.log("Water is boiling")
    },2000)
    console.log("Add the tea leaves")
    setTimeout(() => {
        console.log("leaves are boiling")
    }, 2000);
    console.log("Tea is ready")
}
makeTea()
//boil the water
// Add the tea leaves
// Tea is ready-> tea is ready before boiling water and leaves 
// Water is boiling
// leaves are boiling
//to solve this problem we use async await in js
async function makeProperTea(){
    console.log("boil the water")
    await new Promise((resolve) => {
            setTimeout(() => {
            console.log("Water is boiling")
            resolve()
        }, 2000);
        
    })
    console.log("Add the tea leaves")
    await new Promise((resolve) => {
            setTimeout(() => {
            console.log("leaves are boiling")
            resolve()
        }, 2000);
        
    })
    console.log("Tea is ready")
}
makeProperTea()
// boil the water
// Water is boiling
// Add the tea leaves
// leaves are boiling
// Tea is ready
// //comment out maketea() before compiling makepropertea()