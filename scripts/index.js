const button = document.getElementById("fire");
button.addEventListener("click", () => {
  document.getElementById("myPopup").classList.toggle("show");
  document.getElementById("fire").classList.toggle("btn-hidden");
  document.getElementById("myPopup").play();
});
