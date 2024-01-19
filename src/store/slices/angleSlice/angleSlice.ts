import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AngleSliceInitialState } from "./type";

const initialState: AngleSliceInitialState = {
  angle: 0,
  flipX: false,
  flipY: false,
};
const angleSlice = createSlice({
  name: "angleSlice",
  initialState,
  reducers: {
    //reducer to change angle of image
    changeAngle: (state, { payload }: PayloadAction<number>) => {
      state.angle = payload;
    },

    //reducer to rotate image left
    rotateLeft: (state) => {
      const angle = state.angle - 90;
      if (angle <= -360) {
        state.angle = angle % 360;
      } else {
        state.angle = state.angle - 90;
      }
    },

    //reducer to rotate image right
    rotateRight: (state) => {
      const angle = state.angle + 90;
      if (angle >= 360) {
        state.angle = angle % 360;
      } else {
        state.angle = state.angle + 90;
      }
    },

    //reducer to flip x image
    flipX: (state) => {
      state.flipX = !state.flipX;
    },

    //reducer to flip y image
    flipY: (state) => {
      state.flipY = !state.flipY;
    },
  },
});
export const { changeAngle, rotateLeft, rotateRight } = angleSlice.actions;
export default angleSlice.reducer;
