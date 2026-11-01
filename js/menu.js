const menuButonu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#ana-menu");

menuButonu.addEventListener("click", function () {
  menu.classList.toggle("acik");

  const acikMi = menu.classList.contains("acik");
  menuButonu.setAttribute("aria-expanded", acikMi);
});
