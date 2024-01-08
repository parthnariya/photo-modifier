import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateImageSlice } from "./type";
const initialState: InitialStateImageSlice = {
  image: "",
  imageName: "",
};
const imageSlice = createSlice({
  name: "imageSlice",
  initialState,
  reducers: {
    loadImage: (state, { payload }: PayloadAction<string>) => {
      state.image = payload;
    },
  },
});
export const { loadImage } = imageSlice.actions;
export default imageSlice.reducer;
