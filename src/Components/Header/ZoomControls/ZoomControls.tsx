import ZoomControlsStyle from "./ZoomControls.style";
import PlusIcon from "../../../assets/icons/plus.svg?react";
import MinusIcon from "../../../assets/icons/minus.svg?react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import {
  decreaseZoom,
  increaseZoom,
} from "../../../store/slices/ImageSlice/imageSlice";
const ZoomControls = () => {
  const { zoomLevel } = useAppSelector((state) => state.image);
  const dispatch = useAppDispatch();
  const increaseScaleHandler = () => {
    if (zoomLevel < 2) dispatch(increaseZoom());
  };
  const decreaseScaleHandler = () => {
    if (zoomLevel > 0.5) dispatch(decreaseZoom());
  };
  return (
    <ZoomControlsStyle>
      <button onClick={increaseScaleHandler} className={zoomLevel >= 2 ? 'disable' : ''}>
        <PlusIcon />
      </button>
      <p className="values">{zoomLevel}x</p>
      <button onClick={decreaseScaleHandler} className={zoomLevel <= 0.5 ? 'disable' : ''}>
        <MinusIcon />
      </button>
    </ZoomControlsStyle>
  );
};

export default ZoomControls;
