import { ChangeEventHandler } from "react";
import SliderStyle from "./Slider.style";
type SliderPropType = {
  title: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChangeHandler: (str: string, value: number) => void;
};
const Slider = (props: SliderPropType) => {
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
    props.onChangeHandler(props.title, +e.target.value);
  };
  return (
    <SliderStyle>
      <div className="header">
        <p className="title">{props.title}</p>
        <span className="value">{props.value}</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        className="slider"
        onChange={changeHandler}
      />
    </SliderStyle>
  );
};

export default Slider;
