import SliderStyle from "./Slider.style";

const Slider = () => {
  return (
    <SliderStyle>
      <div className="header">
        <p className="title">Brightness</p>
        <span className="value">100</span>
      </div>
      <input type="range" min={-100} max={100} step={10} defaultValue={0} className="slider"/>
    </SliderStyle>
  );
};

export default Slider;
