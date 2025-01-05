document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const collapseMenu = document.querySelector(".collapse");

  toggleButton.addEventListener("click", () => {
    collapseMenu.classList.toggle("open");
  });
});
