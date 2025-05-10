import { drawBlurHashOnCanvas, drawImageOnCanvas } from "@/utils/canvas";

interface RenderMessage {
  start?: {
    canvas: OffscreenCanvas;
    blurHash: string | null;
    imgURL: string;
    screenSize: ScreenSize;
    dpr: number;
  };
  update?: {
    windowSize: WindowSize;
  };
}

const defaultBlurHash = "L3IMQZGt01_~Qp%OEzIV00sq7xF2";
let canvas: OffscreenCanvas | null = null;
let blurHash: string | null = null;
let imgBitmap: ImageBitmap | null = null;

function drawOnCanvas(width: number, height: number) {
  if (!canvas || !imgBitmap) {
    console.warn("Canvas or Bitmap not set");
    return;
  }
  drawBlurHashOnCanvas(
    canvas,
    blurHash ?? defaultBlurHash,
    width,
    height
  );
  drawImageOnCanvas(
    canvas,
    imgBitmap,
    width,
    height
  );
}

onmessage = async function (event: MessageEvent<RenderMessage>) {
  if (event.data.start) {
    canvas = event.data.start.canvas;
    blurHash = event.data.start.blurHash;

    const screenSize = event.data.start.screenSize;
    const imgURL = new URL(event.data.start.imgURL);
    imgURL.searchParams.set("w", screenSize.width.toString());
    imgURL.searchParams.set("dpr", event.data.start.dpr.toString());

    const imgBlob = await fetch(imgURL.href).then((res) => res.blob());
    imgBitmap = await createImageBitmap(imgBlob);

    drawOnCanvas(screenSize.width, screenSize.height);
  } else if (event.data.update) {
    if (!canvas || !imgBitmap) {
      console.warn("Cannot 'update' until 'start' Message is Posted");
      return;
    }
    drawOnCanvas(
      event.data.update.windowSize.width,
      event.data.update.windowSize.height
    );
  }
};
