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
