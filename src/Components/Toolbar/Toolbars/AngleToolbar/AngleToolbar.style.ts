import styled from "styled-components";

const AngleToolbarStyle = styled.div`
  padding: 2.34375vw 1.5625vw;
  display: grid;
  grid-row-gap: 2.34375vw;
  font-size: 0.95em;
  .container {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0.78125vw;
    row-gap: 0.78125vw;
    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 4.6875vw;
      background: ${(props) => props.theme.borderColor};
      padding: 1.5625vw 1.172vw;
      font-weight: 600;
      font-size: 0.95em;
      user-select: none;
      p {
        margin-left: 0.78125vw;
      }
      svg {
        width: 1.5625vw;
        height: 1.5625vw;
      }
    }
  }
  .slider_container {
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
  }
`;
export default AngleToolbarStyle;
