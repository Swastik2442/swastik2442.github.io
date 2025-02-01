import { drawImageOnCanvas } from "@/app/_components/canvasImg";
import { drawBlurHashOnCanvas } from "@/app/_components/blurHash";

interface RenderMessage {
  start?: {
    canvas: OffscreenCanvas;
    blurHash: string | null;
    imgURL: string;
    screenSize: ScreenSize;
  };
  update?: {
    windowSize: WindowSize;
  };
};

let canvas: OffscreenCanvas | null = null;
let blurHash: string | null = null;
let imgURL: string | null = null;

function drawOnCanvas(
  canvas: OffscreenCanvas,
  blurHash: string | null,
  imgURL: string,
  width: number,
  height: number
) {
  drawBlurHashOnCanvas(
    canvas,
    blurHash ?? "L3IMQZGt01_~Qp%OEzIV00sq7xF2",
    width,
    height
  );
  // drawImageOnCanvas(
  //   canvas,
  //   imgURL,
  //   width,
  //   height,
  // );
}

onmessage = function (event: MessageEvent<RenderMessage>) {
  if (event.data.start) {
    canvas = event.data.start.canvas;
    blurHash = event.data.start.blurHash;
    imgURL = event.data.start.imgURL;

    drawOnCanvas(
      canvas,
      blurHash,
      imgURL,
      event.data.start.screenSize.width,
      event.data.start.screenSize.height
    );
  } else if (event.data.update) {
    if (!canvas || !imgURL) {
      console.warn("Cannot 'update' until 'start' Message is Posted");
      return;
    }
    drawOnCanvas(
      canvas,
      blurHash,
      imgURL,
      event.data.update.windowSize.width,
      event.data.update.windowSize.height
    );
  }
};
