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
      if (state.showToolbar) {
        state.showToolbar = false;
        if (payload.editingMode) {
          state.editingMode = payload.editingMode;
          state.showToolbar = true;
        }
      } else if (!state.showToolbar && payload.editingMode) {
        state.editingMode = payload.editingMode;
        state.showToolbar = true;
      }
    },
  },
});
export const { toggleToolBar } = toolbarSlice.actions;
export default toolbarSlice.reducer;
