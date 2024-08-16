import { configureStore } from "@reduxjs/toolkit";
import { modalsSlice } from "./slices/modalSlice";
import { widgetSlice } from "./slices/widgetSlice";

export const store = configureStore({
  reducer: {
    widgetOperator: widgetSlice.reducer,
    modalOperator: modalsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
