import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateToolbarSlice, ToggleToolBarPayloadType } from "./type";
const initialState: InitialStateToolbarSlice = {
  showToolbar: false,
  editingMode: undefined,
};
const toolbarSlice = createSlice({
  name: "toolbarSlice",
  initialState,
  reducers: {
    /* reducer to toggleToolbar with mode */
    toggleToolBar: (
      state,
      { payload }: PayloadAction<ToggleToolBarPayloadType>
    ) => {
      if (state.showToolbar && !payload.editingMode) {
        state.showToolbar = false;
      } else if (!state.showToolbar && payload.editingMode) {
        state.editingMode = payload.editingMode;
        state.showToolbar = true;
      } else {
        state.showToolbar = false;
        state.editingMode = payload.editingMode;
      }
    },
  },
});
export const { toggleToolBar } = toolbarSlice.actions;
export default toolbarSlice.reducer;
