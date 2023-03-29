const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

const uiReducer = uiSlice.reducer;

export const { toggle } = uiSlice.actions;

export default uiReducer;
