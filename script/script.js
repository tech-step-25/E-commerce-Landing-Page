const mQ = window.matchMedia("(max-width:768px)");
const mQ1 = window.matchMedia("(max-width:470px)");
const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const heedings = document.querySelectorAll(".text-lg");
const mediumText = document.querySelectorAll(".text-md");
const smallText = document.querySelectorAll(".text-sm");
var isClicked = true;
var isMatched = "";

function changeScreenWidth() {
  if (mQ.matches) {
    /*navbar links -> hidden*/
    links.classList.replace("d-flex", "d-hidden");

    /*barIcon links -> block*/
    barIcon.classList.replace("d-hidden", "d-block");

    /* text -> md */
    heedings.forEach((e) =>
      e.classList.replace(
        isMatched.match("t") ? "text-sm" : "text-lg",
        "text-md"
      )
    );
    isMatched = "f";

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
    heedings.forEach((e) => {
      e.classList.replace(
        isMatched.match("f") ? "text-md" : "text-sm",
        "text-lg"
      );
    });
    isMatched = "";

    /* text -> md */
    mediumText.forEach((e) => e.classList.replace("text-sm", "text-md"));

    /* text -> sm */
    smallText.forEach((e) => e.classList.replace("text-xsm", "text-sm"));
  }
}

function changeScreenWidth1() {
  /* text -> sm*/
  if (mQ1.matches) {
    heedings.forEach((e) =>
      e.classList.replace(
        isMatched.match("f") ? "text-md" : "text-lg",
        "text-sm"
      )
    );
    isMatched = "t";
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
changeScreenWidth1();

mQ.addEventListener("change", changeScreenWidth);
mQ1.addEventListener("change", changeScreenWidth1);
barIcon.addEventListener("click", clickBarIcon);
