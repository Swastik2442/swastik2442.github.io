export function getScreenSize() {
  const isClient = typeof window === "object";

  return isClient ? {
    height: window.screen.height,
    width: window.screen.width
  } : undefined;
}

export function getOrientation(windowSize?: WindowSize) {
  if (!windowSize || Math.round(windowSize.width) == Math.round(windowSize.height))
    return "squarish";
  return windowSize.width > windowSize.height ? "landscape" : "portrait";
}

export function areObjectsEqual(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length)
    return false;
  for (const key of keys1) {
      if (obj1[key] !== obj2[key])
        return false;
  }
  return true;
}

export function toRadians(angle: number): number {
  if (angle < 0)
    angle = Math.ceil(-angle / 360) * 360 + angle;
  else if (angle > 360)
    angle = Math.ceil(angle / 360) * 360 - angle;

  return angle * Math.PI / 180;
}
