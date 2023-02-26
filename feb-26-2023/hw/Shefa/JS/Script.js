const head = document.querySelectorAll(".head");
const body = document.querySelectorAll(".body");

const headArr = Array.from(head);
const bodyArr = Array.from(body);

headArr.map((h) => {
  h.addEventListener("click", () => {
    const index = headArr.indexOf(h);
    for (let i = 0; i < headArr.length; i++) {
      if (i == index) {
        headArr[i].classList = "head-active";
        bodyArr[i].classList = "body-active";
      } else {
        headArr[i].classList = "head";
        bodyArr[i].classList = "body";
      }
    }
  });
});
