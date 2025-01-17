"use client";

export function useScreenSize() {
  const isClient = typeof window === "object";

  return isClient ? {
    height: window.screen.height,
    width: window.screen.width
  } : undefined;
}

export default useScreenSize;
