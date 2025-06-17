const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");
const showIcons = document.querySelectorAll(`.show-icon`);;

barIcon.addEventListener("click", () => {
  links.classList.toggle("open");
});

showIcons.forEach((element) => {
  element.addEventListener("click", () => {
    const targetId = element.getAttribute('data-target');
    const target = document.getElementById(targetId);
    target.classList.toggle("d-hidden");
  })
});
