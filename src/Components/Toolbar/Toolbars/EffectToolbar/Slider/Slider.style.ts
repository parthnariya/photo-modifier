import styled from "styled-components";

const SliderStyle = styled.div`
  .header {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 1.172vw;
  }
  .value {
    text-align: right;
  }
  .slider {
    width: 100%;
    -webkit-appearance: none;
    height: 0.313vw;
    border-radius: 0.469vw;
    appearance: none;
    outline: none;
    background-color: ${(props) => props.theme.borderColor};
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    appearance: none;
    width: 1.09375vw;
    height: 1.09375vw;
    background-color: ${(props) => props.theme.primary};
  }
  .slider::-moz-range-thumb {
    border-radius: 50%;
    appearance: none;
    width: 1.09375vw;
    height: 1.09375vw;
    background-color: ${(props) => props.theme.primary};
  }
`;
export default SliderStyle;
