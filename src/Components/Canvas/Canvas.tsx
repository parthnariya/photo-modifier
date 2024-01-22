import { useCallback, useEffect, useRef } from "react";
import CanvasStyle from "./Canvas.style";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import {
  setCanvasDimensions,
  setImageDimensions,
  setScaleValue,
} from "../../store/slices/ImageSlice/imageSlice";
import { getScale } from "../../utils/getScale";
import { generateFilterString } from "../../utils/generateFilterString";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasWrapperDivRef = useRef<HTMLDivElement | null>(null);
  const {
    image,
    width,
    canvasContainerHeight,
    canvasContainerWidth,
    scaleValue,
    zoomLevel,
  } = useAppSelector((state: RootState) => state.image);
  const { showToolbar } = useAppSelector((state) => state.toolbar);
  const { blur, brightness, contrast, saturation, hueRotate, invert } =
    useAppSelector((state) => state.effect);
  const { angle, flipX, flipY } = useAppSelector((state) => state.angle);
  const dispatch = useAppDispatch();

  const drawCanvas = useCallback(
    (img: HTMLImageElement) => {
      if (!width && canvasContainerWidth && canvasContainerHeight) {
        if (
          img.width + 250 > canvasContainerWidth ||
          img.height + 100 > canvasContainerHeight
        ) {
          const diffWidth = img.width + 250 - canvasContainerWidth;
          const diffHeight = img.height + 100 - canvasContainerHeight;
          dispatch(
            setScaleValue({ scaleValue: getScale(diffWidth, diffHeight) })
          );
        } else {
          dispatch(setScaleValue({ scaleValue: 1 }));
        }
        dispatch(setImageDimensions({ height: img.height, width: img.width }));
      }

      if (canvasRef.current) {
        const canvasNode = canvasRef.current;
        const canvasCtx = canvasNode.getContext("2d");

        if (canvasWrapperDivRef.current) {
          dispatch(
            setCanvasDimensions({
              canvasContainerHeight: canvasWrapperDivRef.current.clientHeight,
              canvasContainerWidth: canvasWrapperDivRef.current.clientWidth,
            })
          );
        }
        canvasNode.width = img.width * (scaleValue * zoomLevel);
        canvasNode.height = img.height * (scaleValue * zoomLevel);

        if (canvasCtx) {
          canvasCtx.filter = generateFilterString(
            brightness,
            blur,
            contrast,
            hueRotate,
            invert,
            saturation
          );
          if (flipX) {
            canvasCtx.translate(canvasNode.width, 0);
            canvasCtx.scale(-1, 1);
          }
          if (flipY) {
            canvasCtx.translate(0, canvasNode.height);
            canvasCtx.scale(1, -1);
          }
          if (angle !== 0) {
            
            canvasCtx.translate(canvasNode.width / 2, canvasNode.height / 2);
            canvasCtx.rotate((angle * Math.PI) / 180);

            canvasCtx.translate(-canvasNode.width / 2, -canvasNode.height / 2);
          }
          canvasCtx.drawImage(
            img,
            0,
            0,
            img.width * (scaleValue * zoomLevel),
            img.height * (scaleValue * zoomLevel)
          );
        }
      }
    },
    [
      width,
      canvasContainerWidth,
      canvasContainerHeight,
      scaleValue,
      zoomLevel,
      dispatch,
      blur,
      contrast,
      brightness,
      hueRotate,
      invert,
      saturation,
      flipX,
      flipY,
      angle,
    ]
  );

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;

      img.onload = () => drawCanvas(img);
    }
  }, [image, drawCanvas, canvasWrapperDivRef.current?.clientWidth]);
  return (
    <CanvasStyle
      ref={canvasWrapperDivRef}
      style={{ gridColumnStart: showToolbar ? "5" : "2" }}
    >
      <div
        className="canvas-container"
        style={{
          maxWidth: canvasContainerWidth || 500,
          maxHeight: canvasContainerHeight || 500,
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </CanvasStyle>
  );
};

export default Canvas;
