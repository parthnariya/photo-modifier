import SidebarStyle from "./Sidebar.style";
import CropIcon from "../../assets/icons/crop.svg?react";
import AdjustIcon from "../../assets/icons/adjust.svg?react";
import { EditingMode, EditingModeType } from "../../types/editingMode.type";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleToolBar } from "../../store/slices/toolbarSlice/toolbarSlice";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const modeHandler = (editingMode: EditingModeType) => {
    dispatch(toggleToolBar({ editingMode }));
  };
  return (
    <SidebarStyle>
      <div className="wrapper">
        <div
          className="item"
          onClick={() => modeHandler(EditingMode.CROP_IMAGE)}
        >
          <CropIcon />
        </div>
        <div
          className="item"
          onClick={() => modeHandler(EditingMode.ADJUST_IMAGE)}
        >
          <AdjustIcon />
        </div>
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
