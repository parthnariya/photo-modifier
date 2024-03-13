import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  DownloadImagePayloadType,
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
  signalToDownloadFlag: false,
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

    /* download image */
    downloadImage: (
      state,
      { payload }: PayloadAction<DownloadImagePayloadType>
    ) => {
      if (state.signalToDownloadFlag) {
        const link = document.createElement("a");
        link.download = "EditedImage.jpg";
        link.href = payload.dataURl;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        link.remove();

        state.signalToDownloadFlag = false;
      }
    },

    /* reducer to signal download image */

    enableDownloadSignal: (state) => {
      state.signalToDownloadFlag = true;
    },
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
  downloadImage,
  enableDownloadSignal,
} = imageSlice.actions;
export default imageSlice.reducer;
