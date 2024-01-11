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
  scaleValue: 0,
  zoomLevel: 1,
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

    /* reducer to  increase zoomLevel */
    increaseZoom: (state) => {
      if (state.zoomLevel >= 2) {
        return;
      }
      state.zoomLevel = +(state.zoomLevel + 0.1).toFixed(1);
    },

    /* reducer to decrease zoomLevel */

    decreaseZoom: (state) => {
      if (state.zoomLevel <= 0.5) {
        return;
      }
      state.zoomLevel = +(state.zoomLevel - 0.1).toFixed(1);
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
  increaseZoom,
  decreaseZoom,
} = imageSlice.actions;
export default imageSlice.reducer;
