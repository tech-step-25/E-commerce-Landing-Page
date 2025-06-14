const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const showIcons = [];
const values = [];
for (i = 1; i < 5; i++) {
  showIcons[i] = document.querySelector(`.show-icon-${i}`);
  values[i] = document.querySelector(`.value-${i}`);
}

barIcon.addEventListener("click", () => {
  links.classList.toggle("open");
});

showIcons.forEach((element,inedx) => {
  element.addEventListener("click", () => {
    values[inedx].classList.toggle("d-block");
    values[inedx].classList.toggle("d-hidden");
  })
});
