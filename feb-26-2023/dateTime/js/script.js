const today = document.querySelectorAll(".today")[0];
const time = document.querySelectorAll(".time")[0];
const week = document.querySelectorAll(".week")[0];

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
weekDay.map(day => {
    const div = document.createElement("div");
    div.textContent = day;
    week.appendChild(div);
})

const tt = () => {
    const d = new Date();
    today.textContent = d.getDate() + "/" + d.toLocaleString("en-US", { month: "long" }) + "/" + d.getFullYear();
    time.textContent = d.toLocaleTimeString(today);
    const wd = Array.from(week.children);
    const wn = d.toLocaleString("en-US", {weekday: "short"});
    wd.map(di => {
        if(di.innerHTML == wn){
            const getTodayIndex = wd.indexOf(di);
            for (let i = 0; i < wd.length; i++) {
                if(i == getTodayIndex){
                    wd[i].style.cssText = "color: red; border: 1px solid #f00;box-shadow: 0 0 6px #f00;";
                }else{
                    wd[i].style.cssText = "color: #000; border: 1px solid #00f;box-shadow: 0 0 6px #00f;";
                }
            }
        }
    });
}

tt();

setInterval(()=>tt(), 1000);
