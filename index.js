import { decode } from "https://cdn.jsdelivr.net/npm/blurhash@2.0.5/+esm";

document.addEventListener("DOMContentLoaded", () => {
  const hash = "L971fwoeWBj]_4bHWVj[XnWXf6az";
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const bgImg = document.getElementById("bg-img");

  // Set canvas size to match window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pixels = decode(hash, canvas.width, canvas.height);

  const imageData = ctx.createImageData(canvas.width, canvas.height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  bgImg.onload = () => {
    bgImg.style.opacity = "1";
  };
});
