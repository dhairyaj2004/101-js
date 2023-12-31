//"CALLBACK" in Javascript.
function fetchData(callback){
    console.log("Fetching Data...")
    setTimeout(() => {
        const data={
            name:'John',
            age:20
        }
        console.log("Data Fetched")
        callback(data)
    }, 2000); 
}
function displayData(data){
    console.log(`Name : ${data.name}, Age : ${data.age}`);
}
console.log("Program starts here...")
fetchData(displayData);
//the displayData function in your code is used as a callback function.

// In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after a particular operation has been completed. 
//In this case, the fetchData function takes a callback function as an argument and executes it after a timeout of 2000 milliseconds (2 seconds) using setTimeout.
// When fetchData(displayData) is called, it passes the displayData function as an argument to fetchData. After the 2-second delay simulated by setTimeout, fetchData invokes the displayData function, passing it the data object containing name and age as an argument.
// So, in this context, displayData is indeed a callback function that gets executed after the asynchronous operation inside fetchData completes.
