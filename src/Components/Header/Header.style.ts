import styled from "styled-components";

const HeaderStyle = styled.nav<[$showToolbar?: boolean]>`
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 17;
  grid-row-start: 1;
  padding: 0 2.5%;
  transition: all 600ms ease-in-out;
  transform: translateX(0);
  svg {
    stroke: ${(props) => props.theme.primary};
    width: 1.6vw;
    height: 1.6vw;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  .item_groups {
    display: flex;
    &:nth-child(1) {
      .item {
        user-select: none;
        margin-left: 7.97%;
      }
    }
    &:nth-child(2) {
      justify-content: center;
    }
    &:nth-child(3) {
      justify-content: flex-end;
      .item {
        margin-right: 7.97%;
      }
    }
  }
  .item {
    cursor: pointer;
  }
`;
export default HeaderStyle;
