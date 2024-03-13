import { EditingModeType } from "../../../types/editingMode.type";

export type InitialStateToolbarSlice = {
  showToolbar: boolean;
  editingMode: EditingModeType | undefined;
};
export type ToggleToolBarPayloadType = Pick<
  InitialStateToolbarSlice,
  "editingMode"
>;
