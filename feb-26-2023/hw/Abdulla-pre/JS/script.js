const tabheader = document.querySelectorAll(".tab-header")[0];
const headers = Array.from(tabheader.children);
const tabdetails = document.querySelectorAll(".tab-details")[0];
const details = Array.from(tabdetails.children);

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
    for (let j = 0; j < headers.length; j++) {
      if (i === j) {
        headers[j].classList.add("active");
        details[j].classList.remove("d-none");
      } else {
        headers[j].classList.remove("active");
        details[j].classList.add("d-none");
      }
    }
  });
}
