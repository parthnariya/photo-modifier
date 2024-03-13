import styled from "styled-components";

const CanvasStyle = styled.div`
  /* grid-column-start: 2; */
  grid-row-start: 2;
  grid-column-end: 17;
  width: 100%;
  height: 88vh;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: auto;
  transition: all 600ms ease-in-out;
  transform: translateX(0);
  .canvas-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default CanvasStyle;
