"use client";

import { useEffect, useRef, useMemo, memo } from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import useDebounce from "@/hooks/useDebounce";
import useQuery from "@/hooks/useQuery";
import { LoadingIcon } from "@/app/_components/icons";
import { quitPath } from "@/utils/paths";
import { mergeClasses } from "@/utils/css";
import { getScreenSize, getOrientation } from "@/utils/others";
import { tertiaryFont } from "@/config";
import styles from "./page.module.css";

const maxSize = 0.9;

function QuitImgContainer({ children, ...props }: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements["main"]
}) {
  // Keeping it here instead of Renderer to prevent fetching on re-render
  const screenSize = getScreenSize();
  const { data } = useQuery<QImg>(
    `/api/qimg/${getOrientation(screenSize)}`, {
    cache: "force-cache",
    next: { revalidate: 604800 }
  });

  return (
    <QuitImgContainerBorder {...props}>
      <QuitImgRenderer qImg={data} />
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

function QuitImgRenderer({ qImg }: { qImg: QImg | null }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker>();

  const windowSize = useWindowSize();
  const debouncedWindowSize = useDebounce(windowSize, 500);

  useEffect(() => { // Draws on Canvas
    const screenSize = getScreenSize();
    if (!qImg || !screenSize) return;
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

    const imgURL = new URL(qImg.url);
    imgURL.searchParams.set("w", (screenSize.width).toString());
    imgURL.searchParams.set("dpr", (window?.devicePixelRatio ?? 1.5).toString());

    const offScreenCanvas = canvasRef.current!.transferControlToOffscreen();
    workerRef.current.postMessage({
      start: {
        canvas: offScreenCanvas,
        blurHash: qImg.blur_hash,
        imgURL: imgURL.href,
        screenSize: screenSize,
      }
    }, [offScreenCanvas]);

    return () => workerRef.current!.terminate();
  }, [workerRef, qImg]);

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
        {qImg && <>
          <span>Photo by</span>&nbsp;
          <Link href={qImg.attr_author} target="_blank">
            {qImg.name_author}
          </Link>&nbsp;
          <span>on</span>&nbsp;
          <Link href={qImg.attr_service} target="_blank">
            {qImg.name_service}
          </Link>
        </>}
        {qImg == null && <LoadingIcon width={18} height={18} fill="white" />}
      </div>
    </>
  );
}

export default memo(QuitImgContainer);
