import { drawBlurHashOnCanvas, drawImageOnCanvas } from "@/utils/canvas";

interface RenderMessage {
  start?: {
    canvas: OffscreenCanvas;
    blurHash: string | null;
    imgURL: URL;
    screenSize: ScreenSize;
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

    const imgBlob = await fetch(event.data.start.imgURL.href).then((res) => res.blob());
    imgBitmap = await createImageBitmap(imgBlob);

    drawOnCanvas(
      event.data.start.screenSize.width,
      event.data.start.screenSize.height
    );
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
