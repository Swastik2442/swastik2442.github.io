"use client";

import { useEffect } from "react";
import { decode } from "blurhash";

export type Props = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  hash: string;
  height?: number;
  width?: number;
  punch?: number;
};

export function BlurHashCanvas({
  canvasRef,
  hash,
  height = 128,
  width = 128,
  punch,
  ...rest
}: Props) {
  useEffect(() => {
    (() => {
      if (!(canvasRef.current)) return;
      drawBlurHashOnCanvas(canvasRef.current, hash, width, height, punch);
    })();
  }, [canvasRef, hash, height, width, punch]);

  return <canvas {...rest} height={height} width={width} ref={canvasRef} />;
};

export function drawBlurHashOnCanvas(
  canvas: HTMLCanvasElement | OffscreenCanvas,
  hash: string,
  width: number,
  height: number,
  punch?: number
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const imageData = ctx.createImageData(width, height);
  const pixels = decode(hash, width, height, punch);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
}

export default BlurHashCanvas;
