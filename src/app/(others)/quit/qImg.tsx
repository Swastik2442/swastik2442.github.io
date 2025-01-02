"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import type * as CSS from "csstype";
import useWindowSize from "@/hooks/useWindowSize";
import type { WindowSize } from "@/hooks/useWindowSize";
import { drawImageOnCanvas } from "@/app/_components/canvasImg";
import { drawBlurHashOnCanvas } from "@/app/_components/blurHash";
import styles from "./page.module.css";

const maxSize = 0.9;
const distBW = 48;
const ctrlPoint = 12;
const fromOrg = distBW + 2 * ctrlPoint;
let got1QImg = false;

async function getQImg(orientation: "landscape" | "portrait" | "squarish" = "squarish") {
  const response = await fetch("/api/qimg?orientation=" + orientation);
  if (!(response.ok)) return;
  const responseJson = await response.json();
  if (!responseJson) return;
  return responseJson as QImg;
}

function getOrientation(windowSize?: WindowSize) {
  if (!windowSize || windowSize.width == windowSize.height) return "squarish";
  return windowSize.width > windowSize.height ? "landscape" : "portrait";
}

export default function QuitImgContainer({
  children,
  ...props
}: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements['main']
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const windowSize = useWindowSize();
  const clipPath = useMemo(() => pathMaker(windowSize), [windowSize]);
  const [qImg, setQImg] = useState<QImg | undefined>();

  useEffect(() => { // Disables Context Menu on Canvas
    canvasRef.current?.addEventListener(
      "contextmenu", (e) => e.preventDefault()
    );
    return canvasRef.current?.removeEventListener(
      "contextmenu", (e) => e.preventDefault()
    );
  }, [canvasRef]);

  useEffect(() => { // Gets QImg Response
    if (got1QImg) return;
    got1QImg = true;
    getQImg(getOrientation(windowSize)).then((data) => setQImg(data));
  }, [windowSize]);

  useEffect(() => { // Draws BlurHash on Canvas
    if (!(qImg?.blur_hash) || !windowSize) return;
    drawBlurHashOnCanvas(canvasRef.current!, qImg.blur_hash, windowSize.width, windowSize.height);
  }, [qImg, windowSize]);

  // useEffect(() => { // Draws Image on Canvas as per Window Size
  //   if (!(qImg) || !windowSize) return;
  //   const interval = setInterval(() => {
  //     const imgURL = new URL(qImg.url);
  //     imgURL.searchParams.set("w", (maxSize * windowSize.width).toString());
  //     imgURL.searchParams.set("dpr", (window?.devicePixelRatio ?? 1.5).toString());
  //     drawImageOnCanvas(canvasRef.current!, imgURL!.href, windowSize.width, windowSize.height);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [qImg, windowSize]);

  return (
    <main className={styles.main} style={{ clipPath: clipPath }} {...props}>
      <canvas ref={canvasRef} className={styles.qImgCanvas} height={maxSize * windowSize!.height} width={maxSize * windowSize!.width} />
      {children}
    </main>
  );
}

function pathMaker(windowSize?: WindowSize): CSS.Property.ClipPath {
  if (!windowSize) return "none";

  const tdCount = Math.floor((windowSize.width * maxSize - 2 * fromOrg) / distBW);
  const lrCount = Math.floor((windowSize.height * maxSize - 2 * fromOrg) / distBW);

  let x = (windowSize.width * maxSize - tdCount * distBW) / 2;
  let y = (windowSize.height * maxSize - lrCount * distBW) / 2 - distBW;
  let newX, newY;

  const path = [`M ${x} ${y}`];

  newY = y - ctrlPoint;
  for (let i = 0; i < tdCount; i++) {
    newX = x + distBW;
    path.push(`C ${x} ${newY} ${newX} ${newY} ${newX} ${y}`);
    x = newX;
  }

  x += distBW;
  y += distBW;
  path.push(`L ${x} ${y}`);

  newX = x + ctrlPoint;
  for (let i = 0; i < lrCount; i++) {
    newY = y + distBW;
    path.push(`C ${newX} ${y} ${newX} ${newY} ${x} ${newY}`);
    y = newY;
  }

  x -= distBW;
  y += distBW;
  path.push(`L ${x} ${y}`);

  newY = y + ctrlPoint;
  for (let i = 0; i < tdCount; i++) {
    newX = x - distBW;
    path.push(`C ${x} ${newY} ${newX} ${newY} ${newX} ${y}`);
    x = newX;
  }

  y -= distBW;
  x -= distBW;
  path.push(`L ${x} ${y}`);

  newX = x - ctrlPoint;
  for (let i = 0; i < lrCount; i++) {
    newY = y - distBW;
    path.push(`C ${newX} ${y} ${newX} ${newY} ${x} ${newY}`);
    y = newY;
  }

  path.push(`L ${x} ${y}`);

  return "path('" + path.join(' ') + "')";
}
