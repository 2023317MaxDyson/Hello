//  1. While loop
/* Variables  */
let y = 1;
/*  Factoial number n = 5 */
let n = 5;
let a = 1;
if (n === 0){
return false;
}    
while (a <= n){
y *= a;
a++;
}
console.log("The factorial of 5 from the result of the while loop is: " + y + ".");

// 2. For loop
let y2 = 1;
for (let i = 1;  i <= n; i++){
y2 *= i;
}
console.log("The factorial of 5 from the result of the for loop is: " + y2 + ".");

// 3. Function
/* Factoial number n2 = 5  */
function forLoop(n2){
 if (n2 === 0){
 return false;
 }
let y3 = 1;
for (let i = 1; i <= n2; i++){
y3 *= i;
}
return y3;
}
var answer = forLoop(5);
console.log("The factorial of 5 from the result of the function forLoop() is: " + answer + ".");
                        
// 4. Recursion
/*  Factoial number n3 = 5*/
function recursion(n3){
 if (n3 === 0){
 return 1;
  }  
else{
 return n3 * recursion(n3-1)
}
}
 console.log("The factorial of 5 from the result of recursion is: " + recursion(5) + ".");
 