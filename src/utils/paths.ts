import type * as CSS from "csstype";

function transposeInCircle(center: Coordinates, theta: number, radius: number) {
  if (!(0 <= theta && theta <= 2 * Math.PI))
    throw new Error("theta must be between 0 and 2π")

  return {
    x: center.x + radius * Math.cos(theta),
    y: center.y + radius * Math.sin(theta),
  }
}

const tbDiff = 0.1, lrDiff = 0.1;

export function getCoordinates(windowSize: WindowSize, transpose: QuadrilateralTranspose | null = null): QuadrilateralCoords {
  const top = tbDiff * windowSize.height, bottom = (1 - tbDiff) * windowSize.height;
  const left = lrDiff * windowSize.width, right = (1 - lrDiff) * windowSize.width;
  const defaults = {
    tl: { x: left, y: top },
    tr: { x: right, y: top },
    br: { x: right, y: bottom },
    bl: { x: left, y: bottom },
  };
  if (!transpose) return defaults;

  return {
    tl: transposeInCircle(defaults.tl, transpose.tl.theta, transpose.tl.radius),
    tr: transposeInCircle(defaults.tr, transpose.tr.theta, transpose.tr.radius),
    br: transposeInCircle(defaults.br, transpose.br.theta, transpose.br.radius),
    bl: transposeInCircle(defaults.bl, transpose.bl.theta, transpose.bl.radius),
  }
}

export function mainPath(coords: QuadrilateralCoords): CSS.Property.ClipPath {
  const tl = Object.values(coords.tl).join(" "), tr = Object.values(coords.tr).join(" ");
  const bl = Object.values(coords.bl).join(" "), br = Object.values(coords.br).join(" ");
  return `path('M ${tl} L ${tr} L ${br} L ${bl}')`;
}

const distBW = 48, ctrlPoint = 12;
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
