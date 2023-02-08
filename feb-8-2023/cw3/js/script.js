const dhk = document.querySelector("#dhk");
const bgr = document.querySelector("#bgr");
const br = document.querySelector("#br");
const ct = document.querySelector("#ct");
const dhkd = document.querySelector("#dhkd");
const bgrd = document.querySelector("#bgrd");
const brd = document.querySelector("#brd");
const ctd = document.querySelector("#ctd");

dhk.addEventListener("click", ()=>{
    dhk.classList.add("active");
    bgr.classList.remove("active");
    br.classList.remove("active");
    ct.classList.remove("active");
    dhkd.classList.remove("d-none");
    bgrd.classList.add("d-none");
    brd.classList.add("d-none");
    ctd.classList.add("d-none");
})

bgr.addEventListener("click", ()=>{
    dhk.classList.remove("active");
    bgr.classList.add("active");
    br.classList.remove("active");
    ct.classList.remove("active");
    dhkd.classList.add("d-none");
    bgrd.classList.remove("d-none");
    brd.classList.add("d-none");
    ctd.classList.add("d-none");
})

br.addEventListener("click", ()=>{
    dhk.classList.remove("active");
    bgr.classList.remove("active");
    br.classList.add("active");
    ct.classList.remove("active");
    dhkd.classList.add("d-none");
    bgrd.classList.add("d-none");
    brd.classList.remove("d-none");
    ctd.classList.add("d-none");
})

ct.addEventListener("click", ()=>{
    dhk.classList.remove("active");
    bgr.classList.remove("active");
    br.classList.remove("active");
    ct.classList.add("active");
    dhkd.classList.add("d-none");
    bgrd.classList.add("d-none");
    brd.classList.add("d-none");
    ctd.classList.remove("d-none");
})
