const uinput = document.getElementById("uinput");
const snbtn = document.getElementById("snbtn");
const result = document.getElementById("result");

snbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!uinput.value){
        result.style.cssText = `color: red;`;
        return result.innerHTML = "Please write your name";
    }
    result.style.cssText = `color: green;`;
    result.innerHTML = uinput.value;
    return uinput.value = "";
})
