// starting point
// ending point
// increment


// starting point
var x = 0;

while (/* ending point */ x < 10) {
    console.log(x);
    // increment
    ++x;
}

var y = 533;
var x = 1;
while (x <= 10) {
    console.log(y + " x " + x + " = " + x*y);
    x++;
}

// for loop
for(var i = 0; i < 10; i++){
    console.log(i);
}

for(var i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}






function police (year) {
    if(year % 400 === 0){
        return year + " is a leap-year";
    }else if(year % 100 === 0){
        return year + " is not a leap-year";
    }else if (year % 4 === 0){
        return year + " is a leap-year";
    }else{
        return year + " is not a leap-year";
    }
}

console.log(police(2000));
console.log(police(19000));
