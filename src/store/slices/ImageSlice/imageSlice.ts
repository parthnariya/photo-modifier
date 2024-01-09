import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  InitialStateImageSlice,
  SetCanvasDimensionsPayloadType,
  SetImageDimensionsPayloadType,
  SetScaleValuePayloadType,
} from "./type";
const initialState: InitialStateImageSlice = {
  image: "",
  imageName: "",
  height: null,
  width: null,
  scaleValue: 100,
  canvasContainerWidth: null,
  canvasContainerHeight: null,
};
const imageSlice = createSlice({
  name: "imageSlice",
  initialState,
  reducers: {
    /* reducer to store image(base64) */
    loadImage: (state, { payload }: PayloadAction<string>) => {
      state.image = payload;
    },

    /* reducer to store image dimensions */
    setImageDimensions: (
      state,
      { payload }: PayloadAction<SetImageDimensionsPayloadType>
    ) => {
      state.height = payload.height;
      state.width = payload.width;
    },

    /* reducer to store dimension of canvas-wrapper */
    setCanvasDimensions: (
      state,
      { payload }: PayloadAction<SetCanvasDimensionsPayloadType>
    ) => {
      state.canvasContainerHeight = payload.canvasContainerHeight;
      state.canvasContainerWidth = payload.canvasContainerWidth;
    },

    /*reducer to store scaleValue  */
    setScaleValue: (
      state,
      { payload }: PayloadAction<SetScaleValuePayloadType>
    ) => {
      state.scaleValue = payload.scaleValue;
    },

    /* reducer to reset canvas */
    resetCanvas: () => initialState,
  },
});
export const {
  loadImage,
  setImageDimensions,
  setCanvasDimensions,
  setScaleValue,
  resetCanvas,
} = imageSlice.actions;
export default imageSlice.reducer;
