/* eslint-env browser */
// Menu btn Js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});