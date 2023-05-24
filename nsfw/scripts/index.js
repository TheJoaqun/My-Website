const button = document.getElementById("fire");
button.addEventListener("click", () => {
  document.getElementById("byVideo").classList.toggle("show");
  document.getElementById("fire").classList.toggle("btn-hidden");
  document.getElementById("byVideo").play();
});
