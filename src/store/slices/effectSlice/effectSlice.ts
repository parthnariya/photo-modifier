import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateEffectSlice } from "./type";
const initialState: InitialStateEffectSlice = {
  brightness: 0,
  blur: 0,
  contrast: 0,
  hueRotate: 0,
  invert: 0,
  noise: 0,
  pixelate: 0,
  saturation: 0,
  tint: 0,
};
const effectSlice = createSlice({
  name: "effectSlice",
  initialState,
  reducers: {
    /* reducer to change brightness */
    changeBrightness: (state, { payload }: PayloadAction<number>) => {
      state.brightness = payload;
    },

    /* reducer to change blur */
    changeBlur: (state, { payload }: PayloadAction<number>) => {
      state.blur = payload;
    },

    /* reducer to change contrast */
    changeContrast: (state, { payload }: PayloadAction<number>) => {
      state.contrast = payload;
    },

    /* reducer to change hueRotate */
    changeHueRotate: (state, { payload }: PayloadAction<number>) => {
      state.hueRotate = payload;
    },

    /* reducer to change invert */
    changeInvert: (state, { payload }: PayloadAction<number>) => {
      state.invert = payload;
    },

    /* reducer to change noise */
    changeNoise: (state, { payload }: PayloadAction<number>) => {
      state.noise = payload;
    },

    /* reducer to change pixelate */
    changePixelate: (state, { payload }: PayloadAction<number>) => {
      state.pixelate = payload;
    },

    /* reducer to change saturation */
    changeSaturation: (state, { payload }: PayloadAction<number>) => {
      state.saturation = payload;
    },

    /* reducer to change tint */
    changeTint: (state, { payload }: PayloadAction<number>) => {
      state.tint = payload;
    },
  },
});
export const {
  changeBrightness,
  changeBlur,
  changeContrast,
  changeHueRotate,
  changeInvert,
  changeNoise,
  changePixelate,
  changeSaturation,
  changeTint,
} = effectSlice.actions;
export default effectSlice.reducer;
