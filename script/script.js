const mQ = window.matchMedia("(max-width:820px)");
const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const heedings = document.querySelectorAll(".text-lg");
const mediumText = document.querySelectorAll(".text-md");
const smallText = document.querySelectorAll(".text-sm");
var isClicked = true;

function changeScreenWidth() {
  if (mQ.matches) {
    /*navbar links -> hidden*/
    links.classList.replace("d-flex", "d-hidden");

    /*barIcon links -> block*/
    barIcon.classList.replace("d-hidden", "d-block");

    /* text -> md */
    heedings.forEach((e) => e.classList.replace("text-lg", "text-md"));

    /* text -> sm */
    mediumText.forEach((e) => e.classList.replace("text-md", "text-sm"));

    /* text -> xsm */
    smallText.forEach((e) => e.classList.replace("text-sm", "text-xsm"));
  } else {
    /*navbar links -> flex*/
    links.classList.replace(isClicked ? "d-hidden" : "d-block", "d-flex");
    /*barIcon -> hidden*/
    barIcon.classList.replace("d-block", "d-hidden");

    /* text -> lg */
    heedings.forEach((e) => e.classList.replace("text-md", "text-lg"));

    /* text -> md */
    mediumText.forEach((e) => e.classList.replace("text-sm", "text-md"));

    /* text -> sm */
    smallText.forEach((e) => e.classList.replace("text-xsm", "text-sm"));
  }
}

/* navbar */
function clickBarIcon() {
  if (isClicked) {
    /*navbar links -> block*/
    links.classList.replace("d-hidden", "d-block");
    isClicked = false;
  } else {
    /*navbar links -> hidden*/
    links.classList.replace("d-block", "d-hidden");
    isClicked = true;
  }
}

changeScreenWidth();

mQ.addEventListener("change", changeScreenWidth);
barIcon.addEventListener("click", clickBarIcon);
