/*
var personName = ["Jamla", 2, 3, true, "Bumla"];

// console.log(personName[0]);
// console.log(personName.length);
personName.push("Abdulla");
personName.push("Mostofa", "Shefa", "demo");
// console.log(personName);
personName.pop();
personName.shift();
personName.unshift("Daffodil");
// console.log(personName);

for (let i = 0; i < personName.length; i++) {
    console.log(personName[i]);
}


let x = 0;
for (let i = 0; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0){
        x += i;
    }    
}

console.log(x);


let n1 = 1;
let n2 = 2;
let sum = 0;

while (n2 < 4000000) {
    if(n1 % 2 === 0){
        sum += n1;
    }else if(n2 % 2 === 0){
        sum += n2;
    }
    n1 = n1 + n2;
    n2 = n1 + n2;
}

console.log(sum);
*/

let ans;
let p = 4;
let n = 600851475143;

function primeFactors(n) {
    const factors = [];
    while (n % 2 === 0) {
      factors.push(2);
      n = n / 2;
    }
  
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        factors.push(i);
        n = n / i;
      }
    }
  
    if (n > 2) {
      factors.push(n);
    }
  
    return factors;
  }

console.log(primeFactors(75), Math.sqrt(75));

