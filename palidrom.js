const number = require('readline-sync')
let n = number.questionInt("enter the number: ") ;
let k = 0;
let m = n
while (n > 0) {
    let r = n % 10;
  k = k * 10 + r;
n = Math.floor(n / 10);}

if (m === k) {
   console.log("Palindrome number:", k);
} else {
  console.log("Not a palindrome number",k);

}
 