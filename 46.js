//" TRACK USER LOCATION "
//run it in browser
function getlocation(){
    if(!navigator.geolocation){
        return
    }
    else{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("latitude",position.coords.latitude);
            console.log("longitude",position.coords.longitude);
        })
    }
}
getlocation();
//latitude 22.3008
//longitude 73.2043