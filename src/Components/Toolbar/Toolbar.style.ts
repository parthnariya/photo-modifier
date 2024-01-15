import styled from "styled-components";

const ToolbarStyle = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 5;
  background-color: ${(props) => props.theme.toolbarBG};
  overflow-y: auto;
  height: 100vh;
  transition: all 0.3s;
  color: ${(props) => props.theme.primary};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.171875vw 1.5625vw;
    background: ${(props) => props.theme.borderColor};
    svg {
      width: 0.9375vw;
      height: 0.9375vw;
      cursor: pointer;
    }
  }
`;
export default ToolbarStyle;
