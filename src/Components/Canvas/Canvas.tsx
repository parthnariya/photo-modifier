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
    height,
    canvasContainerHeight,
    canvasContainerWidth,
    scaleValue,
  } = useAppSelector((state: RootState) => state.image);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (canvasWrapperDivRef.current)
      dispatch(
        setCanvasDimensions({
          canvasContainerHeight: canvasWrapperDivRef.current.clientHeight,
          canvasContainerWidth: canvasWrapperDivRef.current.clientWidth,
        })
      );
  }, [dispatch]);

  const drawCanvas = useCallback(
    (img: HTMLImageElement) => {
      if (!width && canvasContainerWidth && canvasContainerHeight) {
        console.log(
          width,
          img.width,
          canvasContainerWidth,
          img.height,
          canvasContainerHeight
        );
        if (
          img.width + 250 > canvasContainerWidth ||
          img.height + 100 > canvasContainerHeight
        ) {
          const diffWidth = img.width + 250 - canvasContainerWidth;
          const diffHeight = img.height + 100 - canvasContainerHeight;
          console.log(getScale(diffWidth, diffHeight));
          dispatch(
            setScaleValue({ scaleValue: getScale(diffWidth, diffHeight) })
          );
        }
        dispatch(setImageDimensions({ height: img.height, width: img.width }));
      }

      if (canvasRef.current) {
        const canvasNode = canvasRef.current;
        const canvasCtx = canvasNode.getContext("2d");
        if (canvasCtx) {
          canvasCtx.drawImage(img, 0, 0, img.width, img.height);
        }
      }
    },
    [width, canvasContainerWidth, canvasContainerHeight, dispatch]
  );

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;

      img.onload = () => drawCanvas(img);
    }
  }, [image, drawCanvas]);
  return (
    <CanvasStyle
      ref={canvasWrapperDivRef}
      style={{
        backgroundColor: "yellow",
      }}
    >
      <div
        className="canvas-container"
        style={{
          backgroundColor: "pink",
          maxWidth: canvasContainerWidth || 500,
          maxHeight: canvasContainerHeight || 500,
        }}
      >
        <canvas
          ref={canvasRef}
          width={width || 500}
          height={height || 500}
          style={{ transform: `scale(${scaleValue/100})` }}
        />
      </div>
    </CanvasStyle>
  );
};

export default Canvas;
