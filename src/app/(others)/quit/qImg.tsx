"use client";

import { useEffect, useRef, useMemo, memo, JSX } from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import useDebounce from "@/hooks/useDebounce";
import { LoadingIcon } from "@/components/icons";
import { quitPath } from "@/utils/paths";
import { mergeClasses } from "@/utils/css";
import { getScreenSize } from "@/utils/others";
import { tertiaryFont } from "@/config";
import styles from "./page.module.css";
import { AppProviderState, useApp } from "@/contexts/appProvider";

const maxSize = 0.9;

function QuitImgContainer({ children, ...props }: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements["main"]
}) {
  const { qImg } = useApp();
  return (
    <QuitImgContainerBorder {...props}>
      <QuitImgRenderer qImg={qImg} />
      {children}
    </QuitImgContainerBorder>
  );
}

function QuitImgContainerBorder({ children, ...props }: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements["main"]
}) {
  const windowSize = useWindowSize();
  const clipPath = useMemo(() => windowSize && quitPath({
    height: windowSize.height * maxSize, width: windowSize.width * maxSize
  }), [windowSize]);

  return (
    <main className={styles.main} style={{ clipPath: clipPath }} {...props}>
      {children}
    </main>
  );
}

function QuitImgRenderer({ qImg }: { qImg: AppProviderState["qImg"] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker>();

  const windowSize = useWindowSize();
  const debouncedWindowSize = useDebounce(windowSize, 500);

  useEffect(() => { // Draws on Canvas
    const screenSize = getScreenSize();
    if (!qImg.data || !screenSize) return;
    if (!workerRef.current) {
      workerRef.current = new Worker(
        new URL("./renderWorker.ts", import.meta.url),
        {
          name: "Quit Image Renderer",
          type: "module",
          credentials: "omit"
        }
      );
    }

    const offScreenCanvas = canvasRef.current!.transferControlToOffscreen();
    workerRef.current.postMessage({
      start: {
        canvas: offScreenCanvas,
        blurHash: qImg.data.blur_hash,
        imgURL: qImg.data.url,
        screenSize: screenSize,
        dpr: window?.devicePixelRatio ?? 1.5
      }
    }, [offScreenCanvas]);

    return () => workerRef.current!.terminate();
  }, [workerRef, qImg.data]);

  useEffect(() => { // Redraws on Resize
    if (!workerRef.current || !debouncedWindowSize) return;
    workerRef.current.postMessage({
      update: { windowSize: debouncedWindowSize }
    });
  }, [workerRef, debouncedWindowSize]);

  return (
    <>
      {windowSize && <canvas
        ref={canvasRef}
        className={styles.qImgCanvas}
        height={maxSize * windowSize.height}
        width={maxSize * windowSize.width}
        onContextMenu={(e) => e.preventDefault()}
      />}
      <div className={mergeClasses(styles.qImgAttr, tertiaryFont.className)}>
        {qImg.data && <>
          <span>Photo by</span>&nbsp;
          <Link href={qImg.data.attr_author} target="_blank">
            {qImg.data.name_author}
          </Link>&nbsp;
          <span>on</span>&nbsp;
          <Link href={qImg.data.attr_service} target="_blank">
            {qImg.data.name_service}
          </Link>
        </>}
        {qImg.loading && <LoadingIcon width={18} height={18} fill="white" />}
      </div>
    </>
  );
}

export default memo(QuitImgContainer);
