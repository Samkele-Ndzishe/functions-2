// made a functions that multiply
function multiply(a,b,c) {
    return a * b * c;
}
console.log(multiply(2,3,2));
// converting numbers of minutes to the amount of seconds in that minutes
function convertToSeconds(min) {
    return min * 60 ;
}
console.log(convertToSeconds(5));
// converting fahrenheit to celsius
function fahrenheitToCelsius(F, divide, number) {
    return (F - 32)*0.555556;
}
console.log(fahrenheitToCelsius(78));

// reverse a string functions
function reverse(A) {
    return A.split("").reverse().join("");
}
console.log(reverse('Mar'));
//count number of vowels in a text
function vowels(p) {
    
}
// finding a prime number
function isPrime(num1) {
   if  (num1 <= 1) return false;
    for (let i = 2; i <= num1 ; i++){
         if (num1 % i ===0){
        return false;
    }
    else{
        return true;
    }
    }
   
}
console.log(isPrime(3));
