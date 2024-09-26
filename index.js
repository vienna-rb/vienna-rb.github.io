import { decode } from "https://cdn.jsdelivr.net/npm/blurhash@2.0.5/+esm";

document.addEventListener('DOMContentLoaded', () => {
  const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

  // draw it on canvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(32, 32);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
});
