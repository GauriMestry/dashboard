import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckedWidget } from "../../components/tabs/Cwpm";
import { Category, initialState, NewWidgetType } from "../initialState";

export const widgetSlice = createSlice({
  name: "widgetOperator",
  initialState,
  reducers: {
    defaultWidgets: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setDefaultWidgetsForUpdate: (state) => {
      state.updatedWidgets = initialState.updatedWidgets;
      state.newWidgetState.newwidget = initialState.newWidgetState.newwidget;
      state.newWidgetState.categoryId = initialState.newWidgetState.categoryId;
    },
    setNewWidgetState: (state, action: PayloadAction<NewWidgetType>) => {
      state.newWidgetState.newwidget = action.payload.newwidget;
      state.newWidgetState.categoryId = action.payload.categoryId;
    },
    updateWidgetsByCategory: (state, action: PayloadAction<NewWidgetType>) => {
      state.categories.map((category) => {
        if (category?.id === action?.payload?.categoryId) {
          category.widgets = [...category.widgets, action.payload.newwidget];
        }
      });
    },
    setWidgetForUpdate: (state, action: PayloadAction<CheckedWidget[]>) => {
      state.updatedWidgets = action.payload;
    },
    updateWidgetVisibility: (state, action: PayloadAction<CheckedWidget[]>) => {
      const updates = action.payload;
      state.categories.forEach((category) => {
        category.widgets.forEach((widget) => {
          const update = updates.find((u) => u?.widgetId === widget?.id);
          if (update) {
            widget.visibility = update.visibility;
          }
        });
      });
    },
  },
});

export const {
  defaultWidgets,
  setNewWidgetState,
  setWidgetForUpdate,
  updateWidgetsByCategory,
  setDefaultWidgetsForUpdate,
  updateWidgetVisibility,
} = widgetSlice.actions;

export default widgetSlice.reducer;
