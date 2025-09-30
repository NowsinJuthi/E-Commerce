import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/Reducer.js"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
