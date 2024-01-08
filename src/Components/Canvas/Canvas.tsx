import { useEffect, useRef, useState } from "react";
import CanvasStyle from "./Canvas.style";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../hooks/useAppDispatch";

const Canvas = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { image } = useAppSelector((state: RootState) => state.image);
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx && image) {
        const img = new Image();
        img.src = image;
        img.onload = function () {
          setWidth(img.width);
          setHeight(img.height);
          ctx.drawImage(img, 0, 0, width, height);
        };
      }
    }
  }, [image, height, width]);
  return (
    <CanvasStyle>
      <canvas ref={canvasRef} width={width} height={height} />
    </CanvasStyle>
  );
};

export default Canvas;
