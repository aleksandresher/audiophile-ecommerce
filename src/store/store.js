import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import uiReducer from "../features/UiSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
