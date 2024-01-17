import AngleToolbarStyle from "./AngleToolbar.style";
import FlipXIcon from "../../../../assets/icons/flipX.svg?react";
import FlipYIcon from "../../../../assets/icons/flipX.svg?react";
import RotateLeftIcon from "../../../../assets/icons/left.svg?react";
import RotateRightIcon from "../../../../assets/icons/right.svg?react";
const AngleToolbar = () => {
  return (
    <AngleToolbarStyle>
      <div className="container">
        <div className="option">
          <FlipXIcon />
          <p> Flip X</p>
        </div>
        <div className="option">
          <FlipYIcon />
          <p> Flip Y</p>
        </div>
        <div className="option">
          <RotateLeftIcon /> <p> Rotate Left</p>
        </div>
        <div className="option">
          <RotateRightIcon />
          <p> Rotate Right</p>
        </div>
      </div>
      <div className="slider_container">
        <div className="header">
          <p className="title">Angle</p>
          <span className="value">100</span>
        </div>
        <input type="range" className="slider" />
      </div>
    </AngleToolbarStyle>
  );
};

export default AngleToolbar;
