import { decode } from "https://cdn.jsdelivr.net/npm/blurhash@2.0.5/+esm";

const hash = "L971fwoeWBj]_4bHWVj[XnWXf6az";
const canvas = document.getElementById("canvas");
const bgImg = document.getElementById("bg-img");
const ctx = canvas.getContext("2d");

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
