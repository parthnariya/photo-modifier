import AngleToolbarStyle from "./AngleToolbar.style";
import FlipXIcon from "../../../../assets/icons/flipX.svg?react";
import FlipYIcon from "../../../../assets/icons/flipX.svg?react";
import RotateLeftIcon from "../../../../assets/icons/left.svg?react";
import RotateRightIcon from "../../../../assets/icons/right.svg?react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useAppDispatch";
import {
  changeAngle,
  flipX,
  flipY,
  rotateLeft,
  rotateRight,
} from "../../../../store/slices/angleSlice/angleSlice";
const AngleToolbar = () => {
  const { angle } = useAppSelector((state) => state.angle);
  const dispatch = useAppDispatch();

  return (
    <AngleToolbarStyle>
      <div className="container">
        <div className="option" onClick={() => dispatch(flipX())}>
          <FlipXIcon />
          <p> Flip X</p>
        </div>
        <div className="option" onClick={() => dispatch(flipY())}>
          <FlipYIcon />
          <p> Flip Y</p>
        </div>
        <div className="option" onClick={() => dispatch(rotateLeft())}>
          <RotateLeftIcon /> <p> Rotate Left</p>
        </div>
        <div className="option" onClick={() => dispatch(rotateRight())}>
          <RotateRightIcon />
          <p> Rotate Right</p>
        </div>
      </div>
      <div className="slider_container">
        <div className="header">
          <p className="title">Angle</p>
          <span className="value">{angle}</span>
        </div>
        <input
          type="range"
          className="slider"
          value={angle}
          onChange={(e) => dispatch(changeAngle(+e.target.value))}
          min={-360}
          max={360}
        />
      </div>
    </AngleToolbarStyle>
  );
};

export default AngleToolbar;
