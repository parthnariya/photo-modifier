import { useAppSelector } from "../../hooks/useAppDispatch";
import HeaderStyle from "./Header.style";
import ImageHandler from "./ImageHandler/ImageHandler";
import RevisionHistory from "./RevisionHistory/RevisionHistory";
import ZoomControls from "./ZoomControls/ZoomControls";

const Header = () => {
  const { image } = useAppSelector((state) => state.image);
  const { showToolbar } = useAppSelector((state) => state.toolbar);
  return (
    <HeaderStyle style={{ gridColumnStart: showToolbar ? "5" : "2" }}>
      <div className="items">
        <div className="item_groups">
          <div className="item">
            <RevisionHistory revision="undo" />
          </div>
          <div className="item">
            <RevisionHistory revision="redo" />
          </div>
        </div>
        <div className="item_groups">
          <div className="item">{image && <ZoomControls />}</div>
        </div>
        <div className="item_groups">
          <div className="item">
            <ImageHandler type="upload" />
          </div>
          <div className="item">
            <ImageHandler type="download" />
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
