const links = document.querySelector(".links");
const barIcon = document.querySelector(".bar-icon");

barIcon.addEventListener("click", () => {
  links.classList.toggle("open");
});
