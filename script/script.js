const mQ = window.matchMedia("(max-width:768px)");
const mQ1 = window.matchMedia("(max-width:470px)");
const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const heedings = document.querySelectorAll(".text-lg");
const text = document.querySelectorAll(".text-md");
const text1 = document.querySelectorAll(".text-sm");
var isClicked = true;
var isMatched = false;

function changeScreenWidth() {
  if (mQ.matches) {
    /*navbar*/
    links.classList.replace("d-flex", "d-hidden");
    barIcon.classList.replace("d-hidden", "d-block");

    /* text */
    if (mQ1.matches) {
      isMatched = true;
      heedings.forEach((e) => e.classList.replace("text-lg", "text-sm"));
    } else {
      isMatched = false;
      heedings.forEach((e) => e.classList.replace("text-lg", "text-md"));
    }
    text.forEach((e) => e.classList.replace("text-md", "text-sm"));
    text1.forEach((e) => e.classList.replace("text-sm", "text-xsm"));
  } else {
    //block -> in case after clicking baricon
    links.classList.replace(isClicked ? "d-hidden" : "d-block", "d-flex");
    barIcon.classList.replace("d-block", "d-hidden");

    /* text */
    heedings.forEach((e) => {
      e.classList.replace(isMatched ? "text-sm" : "text-md", "text-lg");
    });
    text.forEach((e) => e.classList.replace("text-sm", "text-md"));
    text1.forEach((e) => e.classList.replace("text-xsm", "text-sm"));
  }
}

/* navbar */
function clickBarIcon() {
  if (isClicked) {
    links.classList.replace("d-hidden", "d-block");
    isClicked = false;
  } else {
    links.classList.replace("d-block", "d-hidden");
    isClicked = true;
  }
}

changeScreenWidth();

mQ.addEventListener("change", () => {
  changeScreenWidth();
});
barIcon.addEventListener("click", () => {
  clickBarIcon();
});
