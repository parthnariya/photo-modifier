import SliderStyle from "./Slider.style";
type SliderPropType = {
  title: string;
  min: number;
  max: number;
  step: number;
  value: number;
  // changeHandler: any;
};
const Slider = (props: SliderPropType) => {
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
        // onChange={props.changeHandler}
      />
    </SliderStyle>
  );
};

export default Slider;
