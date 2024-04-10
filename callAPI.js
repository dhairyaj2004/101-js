//How to Call "APIs" in Javascript.??
const url="https://www.freecodecamp.org/news/make-api-calls-in-javascript/"
fetch(url)//we are not specifying particular method so it will consider the get method
.then(response=>{
    //check response is successful or not
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    //if response correct then do this
    return response.json();
})
.then(data=>{
    //handle the json data
    console.log(data);
})
