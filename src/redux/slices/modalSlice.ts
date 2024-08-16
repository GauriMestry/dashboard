import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const modalsSlice = createSlice({
  name: "modalOperator",
  initialState,
  reducers: {
    openWidgetModal: (state) => {
      state.modals.addWidgetModal = true;
    },
    closeModal: (state) => {
      state.modals.addWidgetModal = false;
    },
  },
});

export const { openWidgetModal, closeModal } = modalsSlice.actions;

export default modalsSlice.reducer;
