import { decode } from "blurhash";

export function drawBlurHashOnCanvas(
  canvas: HTMLCanvasElement | OffscreenCanvas,
  hash: string,
  width: number,
  height: number,
  punch?: number
) {
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  const imageData = ctx.createImageData(width, height);
  const pixels = decode(hash, width, height, punch);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
}

export function drawImageOnCanvas(
  canvas: HTMLCanvasElement | OffscreenCanvas,
  img: CanvasImageSource,
  width: number,
  height: number
) {
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  ctx.drawImage(img, 0, 0, width, height);
}
