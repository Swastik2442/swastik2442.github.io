export function getOrientation(windowSize?: WindowSize) {
  if (!windowSize || Math.round(windowSize.width) == Math.round(windowSize.height))
    return "squarish";
  return windowSize.width > windowSize.height ? "landscape" : "portrait";
}
