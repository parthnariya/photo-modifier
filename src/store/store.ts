import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slices/ImageSlice/imageSlice";

export const store = configureStore({
  reducer: {
    image: imageSlice,
  },
});

//export type of RootState
export type RootState = ReturnType<typeof store.getState>;

//export type of AppDispatch
export type AppDispatch = typeof store.dispatch;
