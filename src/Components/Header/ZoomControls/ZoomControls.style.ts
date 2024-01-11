import styled from "styled-components";

const ZoomControlsStyle = styled.div`
  display: flex;
  align-items: center;
  .disable {
    cursor: not-allowed;
    svg {
      stroke: ${(props) => props.theme.disableColor};
    }
  }
  .values {
    padding: 0 1.015625vw;
    cursor: default;
  }
`;
export default ZoomControlsStyle;
