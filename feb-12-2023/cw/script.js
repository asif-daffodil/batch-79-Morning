window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
}

const myForm = document.querySelector("#myForm");
const span = document.querySelectorAll("span");
const sp = document.querySelector("#sp");
const yname = document.getElementsByName("yname")[0];
const yemail = document.getElementsByName("yemail")[0];
const pass = document.getElementsByName("pass")[0];
const output = document.getElementById("output");

Array.from(span).map(d => {
    d.style.cssText = `color: red; padding: 0 8px;`
})

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formObj = new FormData(myForm)
    const ynameVal = formObj.get("yname");
    const yemailVal = formObj.get("yemail"); 
    const passVal = formObj.get("pass");

    if(!ynameVal){
        yname.nextElementSibling.textContent = "Please write your name";
    }else if(!/^[A-Za-z. ]*$/.test(ynameVal)){
        yname.nextElementSibling.textContent = "Invalid name";
    }else{
        yname.nextElementSibling.textContent = null;
    }

    if(!yemailVal){
        yemail.nextElementSibling.textContent = "Please write your email";
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(yemailVal)){
        yemail.nextElementSibling.textContent = "Invalid email address";
    }else{
        yemail.nextElementSibling.textContent = null;
    }

    if(!passVal){
        pass.nextElementSibling.textContent = "Please write your password";
    }else if( !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(passVal)){
        pass.nextElementSibling.textContent = "Please provide a strong password";
    }else{
        pass.nextElementSibling.textContent = null;
    }

    if(yname.nextElementSibling.textContent === "" && yemail.nextElementSibling.textContent === "" && pass.nextElementSibling.textContent === ""){
        yname.value = yemail.value = pass.value = null;
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p1.style.cssText = `color: green`;
        p2.style.cssText = `color: green`;
        p1.textContent = `Name : ${ynameVal}`;
        p2.textContent = `Email : ${yemailVal}`;
        output.appendChild(p1);
        output.appendChild(p2);
    }
})

sp.addEventListener("click", (e)=>{
    if(e.target.checked){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
})

