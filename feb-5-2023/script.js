var x = "Demo Text";
var x = "Demo Text 2";

let y = "Another Text";
// let y = "Another Text";
y = "Another Text 2";

const z = "Another Text";
// const z = "Another Text";
// z = "Another Text";

/*
function myFunc () {
    return "Func Text";
}
*/

const myFunc = () => {
    return "Funy Text";
}

// console.log(myFunc());
// alert(myFunc());
// document.write(myFunc());
document.getElementById("myDiv").innerHTML = myFunc();

const myDivClick = () => {
    document.getElementById("myDiv").innerHTML = "Onno Text";
}

const myDivOut = () => {
    document.getElementById("myDiv").innerHTML = myFunc();
}