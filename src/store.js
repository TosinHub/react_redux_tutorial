import { configureStore } from "@reduxjs/toolkit";

import CanvasReducer from "./features/canvas/canvasSlice";

export const store = configureStore({
  reducer: {
    canvas: CanvasReducer
  }
});
