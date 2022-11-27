import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: {
    code: "#000000"
  },
  font: {
    size: 16
  }
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color.code = action.payload;
    },
    changeFont: (state, action) => {
      state.font.size = action.payload;
    }
  }
});

export const { changeColor, changeFont } = canvasSlice.actions;

export default canvasSlice.reducers;
