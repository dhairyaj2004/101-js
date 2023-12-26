//'PALINDROME'

function checkPalindrome(string){
    let reversed=string.split().reverse().join();
    //first it will split string by each letter then reverse them and again join them
    console.log(string===reversed);
}
checkPalindrome('ADA');
checkPalindrome('મલયાલમ');
