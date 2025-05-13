const mQ = window.matchMedia("(max-width:768px)");
const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
var isClicked = true;

/*Navbar*/
function changeScreenWidth() {
  if (mQ.matches) {
    links.classList.replace("d-flex", "d-hidden");
    barIcon.classList.replace("d-hidden", "d-block");
  } else {
    //block -> in case after clicking baricon
    links.classList.remove("open");
    links.classList.replace(isClicked ? "d-hidden" : "d-block", "d-flex");
    barIcon.classList.replace("d-block", "d-hidden");
  }
}

function clickBarIcon() {
  if (isClicked) {
    links.classList.add("open");
    links.classList.replace("d-hidden", "d-block");
    isClicked = false;
  } else {
    links.classList.replace("d-block", "d-hidden");
    links.classList.remove("open");
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
