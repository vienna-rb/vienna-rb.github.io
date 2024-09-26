const blurhashString = "L971fwoeWBj]_4bHWVj[XnWXf6az";
const canvas = document.getElementById("blurhash-canvas");
const ctx = canvas.getContext("2d");

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

setCanvasSize();
window.addEventListener("resize", setCanvasSize);

const pixels = blurhash.decode(
  blurhashString,
  canvas.width,
  canvas.height,
);
const imageData = ctx.createImageData(canvas.width, canvas.height);
imageData.data.set(pixels);
ctx.putImageData(imageData, 0, 0);

const img = document.getElementById("bg-image");
img.onload = function () {
  canvas.style.opacity = 0;
  img.style.opacity = 1;
  setTimeout(() => {
    canvas.style.display = "none";
  }, 500); // Match this to the transition duration in CSS
};
