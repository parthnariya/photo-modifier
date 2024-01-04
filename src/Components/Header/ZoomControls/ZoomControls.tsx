import ZoomControlsStyle from "./ZoomControls.style";
import PlusIcon from "../../../assets/icons/plus.svg?react";
import MinusIcon from "../../../assets/icons/minus.svg?react";
const ZoomControls = () => {
  return (
    <ZoomControlsStyle>
      <button>
        <PlusIcon />
      </button>
      <p className="values">100%</p>
      <button>
        <MinusIcon />
      </button>
    </ZoomControlsStyle>
  );
};

export default ZoomControls;
