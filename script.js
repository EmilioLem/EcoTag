const fadeButton = document.getElementById("fadeButton");
const fadeElement = document.getElementById("fadeElement");

const zoomButton = document.getElementById("zoomButton");
const zoomElement = document.getElementById("zoomElement");

fadeButton.addEventListener("click", () => {
  fadeElement.classList.toggle("visible"); // Toggle visibility on click
});

zoomButton.addEventListener("click", () => {
  zoomElement.classList.toggle("zoomed"); // Toggle zoom on click
});

//document.querySelector(".element2").style.transform="scale(1.2)"