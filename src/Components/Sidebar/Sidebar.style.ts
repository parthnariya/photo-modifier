import styled from "styled-components";

const SidebarStyle = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: ${(props) => props.theme.menuBG};
  display: flex;
  align-items: center;
  .wrapper {
    width: 100%;
  }
  .item {
    cursor: pointer;
    padding: 1.875vw;
    svg {
      width: 2.34375vw;
      height: 2.34375vw;
    }
    &:hover{
        background-color: ${(props) => props.theme.toolbarBG};
    }
  }
`;
export default SidebarStyle;
