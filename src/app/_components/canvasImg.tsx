"use client";

import { useEffect } from "react";

export type Props = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  imgURL: string;
  height?: number;
  width?: number;
};

export function CanvasImg({
  canvasRef,
  imgURL,
  height = 128,
  width = 128,
  ...rest
}: Props) {
  useEffect(() => {
    (() => {
      if (!(canvasRef.current)) return;
      drawImageOnCanvas(canvasRef.current, imgURL, width, height);
    })();
  }, [canvasRef, imgURL, height, width]);

  return <canvas {...rest} height={height} width={width} ref={canvasRef} />;
};

export function drawImageOnCanvas(
  canvas: HTMLCanvasElement,
  imgURL: string,
  width: number,
  height: number,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const image = new Image(width, height);
  image.src = imgURL;
  image.onload = () => ctx.drawImage(image, 0, 0);
}

export default CanvasImg;
