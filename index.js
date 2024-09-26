import { decode } from "https://cdn.jsdelivr.net/npm/blurhash@2.0.5/+esm";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const bgImg = document.getElementById("bg-img");

  // Set canvas size to match window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Decode and draw blurhash
  const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", canvas.width, canvas.height);
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  // Hide canvas and show image when it's loaded
  bgImg.onload = () => {
    canvas.style.display = 'none';
    bgImg.style.opacity = '1';
  };

  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", canvas.width, canvas.height);
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  });
});
