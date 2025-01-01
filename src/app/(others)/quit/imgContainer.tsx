"use client";

import { useMemo } from "react";
import type * as CSS from "csstype";
import useWindowSize from "@/hooks/useWindowSize";
import type { WindowSize } from "@/hooks/useWindowSize";
import styles from "./page.module.css";

export default function QuitImgContainer({
  children,
  ...props
}: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements['main']
}) {
  const windowSize = useWindowSize();
  const clipPath = useMemo(() => pathMaker(windowSize), [windowSize]);

  return (
    <main className={styles.main} style={{ clipPath: clipPath }} {...props}>
      {children}
    </main>
  );
}

const maxSize = 0.9;
const distBW = 48;
const ctrlPoint = 12;
const fromOrg = distBW + 2 * ctrlPoint;

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
