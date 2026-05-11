const btnMenu = document.getElementById("btnMenu");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});