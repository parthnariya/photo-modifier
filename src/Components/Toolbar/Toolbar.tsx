import ToolbarStyle from "./Toolbar.style";
import CloseIcon from "../../assets/icons/close.svg?react";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { toggleToolBar } from "../../store/slices/toolbarSlice/toolbarSlice";
import EffectToolbar from "./Toolbars/EffectToolbar/EffectToolbar";
const Toolbar = () => {
  const { showToolbar, editingMode } = useAppSelector((state) => state.toolbar);
  const dispatch = useAppDispatch();
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
      <EffectToolbar />
    </ToolbarStyle>
  );
};

export default Toolbar;
