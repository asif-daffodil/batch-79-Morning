const container = document.querySelectorAll(".container")[0];
const main = document.querySelectorAll(".main")[0];
const left = document.querySelectorAll(".left")[0];
const right = document.querySelectorAll(".right")[0];
const ul= document.getElementById("ul");
const liArr = Array.from(ul.children);
const SlideArray = Array.from(main.children);
const TotalSlide = SlideArray.length;
let CurrentSlide = 0;

const MakeCurentSlideVisible = (cs) => {
    SlideArray.map((slide, i) => {
        if(cs == i){
            slide.classList.remove("d-none")
        }else{
            slide.classList.add("d-none");
        }
    })
    liArr.map((li, i) => {
        if(cs == i){
            li.classList.add("active")
        }else{
            li.classList.remove("active");
        }
    })
}

const SlidesFunction = () => {
    if (CurrentSlide == TotalSlide) {
        CurrentSlide = 0;
    }
    MakeCurentSlideVisible(CurrentSlide);
    CurrentSlide++;
}

let setIn = setInterval(()=> SlidesFunction(), 2000);

container.addEventListener("mouseover", ()=>{
    clearInterval(setIn);
})

container.addEventListener("mouseout", ()=>{
    setIn = setInterval(()=> SlidesFunction(), 2000);
})

left.addEventListener("click", ()=>{
   SlideArray.map((sa, i) => {
        if(!sa.classList.contains("d-none")){
            CurrentSlide = i;
        }
    } );
    
    if(CurrentSlide == 0){
        CurrentSlide = TotalSlide - 1;
    }else{
        CurrentSlide--;
    }
    MakeCurentSlideVisible(CurrentSlide);
})

right.addEventListener("click", ()=>{
    SlideArray.map((sa, i) => {
        if(!sa.classList.contains("d-none")){
            CurrentSlide = i;
        }
    } );
    if(CurrentSlide == TotalSlide - 1){
        CurrentSlide = 0;
    }else{
        CurrentSlide++;
    }
    MakeCurentSlideVisible(CurrentSlide);
})

liArr.map((li) => {
    li.addEventListener("click", ()=>{
        CurrentSlide = liArr.indexOf(li);
        MakeCurentSlideVisible(CurrentSlide);
    })
})
