import RevisionHistoryStyle from "./RevisionHIstory.style";
import UndoIcon from "../../../assets/icons/undo.svg?react";
import RedoIcon from "../../../assets/icons/redo.svg?react";
type RevisionHistoryPropType = {
  revision: "undo" | "redo";
};

const RevisionHistory = ({ revision }: RevisionHistoryPropType) => {
  return (
    <RevisionHistoryStyle>
      {revision === "undo" ? <UndoIcon /> : <RedoIcon />}{" "}
    </RevisionHistoryStyle>
  );
};

export default RevisionHistory;
