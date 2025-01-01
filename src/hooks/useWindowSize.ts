"use client";

import { useState, useEffect } from "react";

export interface WindowSize {
  height: number;
  width: number;
}

export function useWindowSize() {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState<WindowSize | undefined>(
    isClient ? {
      height: window.innerHeight,
      width: window.innerWidth
    } : undefined
  );

  useEffect(() => {
    function setSize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    if (isClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isClient]);

  return windowSize;
}

export default useWindowSize;
