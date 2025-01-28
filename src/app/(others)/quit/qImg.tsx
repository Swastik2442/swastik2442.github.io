"use client";

import { useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";
import useWindowSize from "@/hooks/useWindowSize";
import useQuery from "@/hooks/useQuery";
import { drawImageOnCanvas } from "@/app/_components/canvasImg";
import { drawBlurHashOnCanvas } from "@/app/_components/blurHash";
import { LoadingIcon } from "@/app/_components/icons";
import { quitPath } from "@/utils/paths";
import { mergeClasses } from "@/utils/css";
import { getOrientation } from "@/utils/others";
import { tertiaryFont } from "@/config";
import styles from "./page.module.css";

const maxSize = 0.9;

export default function QuitImgContainer({
  children,
  ...props
}: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements['main']
}) {
  const screenSize = useScreenSize();
  const { data } = useQuery<QImg>(
    `/api/qimg/${getOrientation(screenSize)}`, {
    cache: 'force-cache',
    next: { revalidate: 604800 }
  });

  return (
    <QuitImgContainer2 qImg={data} {...props}>
      {children}
    </QuitImgContainer2>
  );
}

function QuitImgContainer2({
  qImg,
  children,
  ...props
}: {
  qImg: QImg | null,
  children: React.ReactNode,
  props?: JSX.IntrinsicElements['main']
}) {
  const windowSize = useWindowSize();
  const clipPath = useMemo(() => windowSize && quitPath({
    height: windowSize.height * maxSize, width: windowSize.width * maxSize
  }), [windowSize]);

  return (
    <main className={styles.main} style={{ clipPath: clipPath }} {...props}>
      <QuitImgRenderer qImg={qImg} windowSize={windowSize} />
      {children}
    </main>
  );
}

function QuitImgRenderer({
  qImg,
  windowSize
}: {
  qImg: QImg | null,
  windowSize?: WindowSize
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => { // Draws BlurHash on Canvas
    if (!qImg || !windowSize) return;
    drawBlurHashOnCanvas(
      canvasRef.current!,
      qImg.blur_hash ?? "L3IMQZGt01_~Qp%OEzIV00sq7xF2",
      windowSize.width,
      windowSize.height
    );
  }, [qImg, windowSize]);

  useEffect(() => { // Draws Image on Canvas as per Window Size
    if (!(qImg) || !windowSize) return;
    const imgURL = new URL(qImg.url);
    imgURL.searchParams.set("w", (maxSize * windowSize.width).toString());
    imgURL.searchParams.set("dpr", (window?.devicePixelRatio ?? 1.5).toString());
    drawImageOnCanvas(
      canvasRef.current!,
      imgURL!.href,
      windowSize.width,
      windowSize.height
    );
  }, [qImg, windowSize]);

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
