import SidebarStyle from "./Sidebar.style";
import CropIcon from "../../assets/icons/crop.svg?react";
const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="wrapper">
        <div className="item">
          <CropIcon />
        </div>
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
