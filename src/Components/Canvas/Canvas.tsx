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
    ]
  );

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;

      img.onload = () => drawCanvas(img);
    }
  }, [image, drawCanvas]);
  return (
    <CanvasStyle ref={canvasWrapperDivRef}>
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
