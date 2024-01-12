import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slices/ImageSlice/imageSlice";
import toolbarSlice from "./slices/toolbarSlice/toolbarSlice";

export const store = configureStore({
  reducer: {
    image: imageSlice,
    toolbar: toolbarSlice,
  },
});

//export type of RootState
export type RootState = ReturnType<typeof store.getState>;

//export type of AppDispatch
export type AppDispatch = typeof store.dispatch;
