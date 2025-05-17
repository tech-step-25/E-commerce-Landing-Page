const mQ = window.matchMedia("(max-width:768px)");
const mQ1 = window.matchMedia("(max-width:470px)");
const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const heedings = document.querySelectorAll(".text-lg");
const mediumText = document.querySelectorAll(".text-md");
const smallText = document.querySelectorAll(".text-sm");
var isClicked = true;
var isMatched = true;

function changeScreenWidth() {
  if (mQ.matches) {
    /*navbar*/
    links.classList.replace("d-flex", "d-hidden");
    barIcon.classList.replace("d-hidden", "d-block");

    /* text */
    if (mQ1.matches) {
      heedings.forEach((e) => e.classList.replace("text-lg", "text-sm"));
      isMatched = false;
    } else {
      heedings.forEach((e) => e.classList.replace("text-lg", "text-md"));
      isMatched = true;
    }
    mediumText.forEach((e) => e.classList.replace("text-md", "text-sm"));
    smallText.forEach((e) => e.classList.replace("text-sm", "text-xsm"));
  } else {
    /*navbar*/
    //block -> in case after clicking baricon
    links.classList.replace(isClicked ? "d-hidden" : "d-block", "d-flex");
    barIcon.classList.replace("d-block", "d-hidden");

    /* text */
    heedings.forEach((e) => {
      e.classList.replace(isMatched ? "text-md" : "text-sm", "text-lg");
    });

    mediumText.forEach((e) => e.classList.replace("text-sm", "text-md"));
    smallText.forEach((e) => e.classList.replace("text-xsm", "text-sm"));
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
