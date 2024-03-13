import ToolbarStyle from "./Toolbar.style";
import CloseIcon from "../../assets/icons/close.svg?react";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { toggleToolBar } from "../../store/slices/toolbarSlice/toolbarSlice";
import EffectToolbar from "./Toolbars/EffectToolbar/EffectToolbar";
import AngleToolbar from "./Toolbars/AngleToolbar/AngleToolbar";
import { EditingModeType } from "../../types/editingMode.type";
import CropToolbar from "./Toolbars/CropToolbar/CropToolbar";
const Toolbar = () => {
  const { showToolbar, editingMode } = useAppSelector((state) => state.toolbar);
  const dispatch = useAppDispatch();
  const toolbarMap: Record<EditingModeType, JSX.Element> = {
    ADJUST_IMAGE: <EffectToolbar />,
    ANGLE_IMAGE: <AngleToolbar />,
    CROP_IMAGE: <CropToolbar />,
  };
  if (!showToolbar) return <></>;
  const closeToolbar = () => {
    dispatch(toggleToolBar({ editingMode: undefined }));
  };
  return (
    <ToolbarStyle>
      <header>
        <h4>{editingMode}</h4>
        <CloseIcon onClick={closeToolbar} />
      </header>
      {editingMode && toolbarMap[editingMode]}
    </ToolbarStyle>
  );
};

export default Toolbar;
