import decodeBlurHash from "https://cdn.jsdelivr.net/npm/blurhash@2.0.5/+esm";

const pixels = decodeBlurHash("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

// draw it on canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(width, height);
imageData.data.set(pixels);
ctx.putImageData(imageData, 0, 0);
document.body.append(canvas);
