//'FIZZ BUZZ' problem
n=15
for(let i=1;i<=n;i++){
if(i%3==0 && i%5==0){
    console.log("FIZZ BUZZ");
}
else if(i%3==0){
    console.log("FIZZ");
}
else if(i%5==0){
    console.log("BUZZ");
}
else{
    console.log(i);
}
}
