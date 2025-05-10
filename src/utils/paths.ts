import type * as CSS from "csstype";

export function mainPath(windowSize: WindowSize): CSS.Property.ClipPath {
  const top = 0.1 * windowSize.height, left = 0.05 * windowSize.width, right = 0.95 * windowSize.width, bottom = 0.9 * windowSize.height;
  const tl = [left, top].join(" "), tr = [right, top].join(" "), br = [right, bottom].join(" "), bl = [left, bottom].join(" ");

  return `path('M ${tl} L ${tr} L ${br} L ${bl}')`;
}

const distBW = 48;
const ctrlPoint = 12;
const ctrlPoint2 = 2 * ctrlPoint;
const fromOrg = distBW + ctrlPoint2;

export function quitPath(windowSize: WindowSize): CSS.Property.ClipPath {
  const tdCount = Math.floor((windowSize.width - 2 * fromOrg) / distBW);
  const lrCount = Math.floor((windowSize.height - 2 * fromOrg) / distBW);

  let x = (windowSize.width - tdCount * distBW) / 2;
  let y = (windowSize.height - lrCount * distBW) / 2 - distBW;
  let newX, newY;

  const path = [`M ${x} ${y}`];

  newY = y - ctrlPoint;
  for (let i = 0; i < tdCount; i++) { // TL to TR
    newX = x + distBW;
    path.push(`C ${x} ${newY} ${newX} ${newY} ${newX} ${y}`);
    x = newX;
  }

  x += distBW;
  y += distBW;
  newX = x + ctrlPoint;
  path.push(`C ${x - distBW + ctrlPoint2} ${y - distBW - ctrlPoint2} ${newX + ctrlPoint} ${y - ctrlPoint2} ${x} ${y}`);

  for (let i = 0; i < lrCount; i++) { // TR to BR
    newY = y + distBW;
    path.push(`C ${newX} ${y} ${newX} ${newY} ${x} ${newY}`);
    y = newY;
  }

  x -= distBW;
  y += distBW;
  newY = y + ctrlPoint;
  path.push(`C ${x + distBW + ctrlPoint2} ${y - distBW + ctrlPoint2} ${x + ctrlPoint2} ${newY + ctrlPoint} ${x} ${y}`);

  for (let i = 0; i < tdCount; i++) { // BR to BL
    newX = x - distBW;
    path.push(`C ${x} ${newY} ${newX} ${newY} ${newX} ${y}`);
    x = newX;
  }

  x -= distBW;
  y -= distBW;
  newX = x - ctrlPoint;
  path.push(`C ${x + distBW - ctrlPoint2} ${y + distBW + ctrlPoint2} ${newX - ctrlPoint} ${y + ctrlPoint2} ${x} ${y}`);

  for (let i = 0; i < lrCount; i++) { // BL to TL
    newY = y - distBW;
    path.push(`C ${newX} ${y} ${newX} ${newY} ${x} ${newY}`);
    y = newY;
  }

  x += distBW;
  y -= distBW;
  newY = y - ctrlPoint;
  path.push(`C ${x - distBW - ctrlPoint2} ${y + distBW - ctrlPoint2} ${x - ctrlPoint2} ${newY - ctrlPoint} ${x} ${y}`);

  return "path('" + path.join(' ') + "')";
}
