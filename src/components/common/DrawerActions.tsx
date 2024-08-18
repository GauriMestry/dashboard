import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";
import {
  setDefaultWidgetsForUpdate,
  updateWidgetsByCategory,
  updateWidgetVisibility,
} from "../../redux/slices/widgetSlice";
import { RootState } from "../../redux/store";

export default function DrawerActions(): ReactElement {
  const dispatch = useDispatch();
  const newWidgetState = useSelector(
    (state: RootState) => state?.widgetOperator?.newWidgetState
  );

  const updatedWidgets = useSelector(
    (state: RootState) => state.widgetOperator.updatedWidgets ?? []
  );

  return (
    <div className="flex flex-row justify-end gap-4 p-4 sm:p-8 md:p-8 xl:p-8 items-center h-10 sm:h-16 md:h-16 xl:h-16">
      <button
        onClick={() => {
          dispatch(closeModal());

          dispatch(setDefaultWidgetsForUpdate());
        }}
        className="bg-white text-indigoDark border-2 border-indigoDark rounded-xl text-sm font-semibold p-2 align-middle w-28 sm:text-lg md:text-lg xl:text-lg sm:font-bold md:font-bold xl:font-bold sm:p-2 md:p-2 xl:p-2 sm:w-32 md:w-36 xl:w-36 sm:border-4 md:border-4 xl:border-4"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          dispatch(updateWidgetVisibility(updatedWidgets));
          dispatch(closeModal());
          dispatch(updateWidgetsByCategory(newWidgetState));
          dispatch(setDefaultWidgetsForUpdate());
        }}
        className="bg-indigoDark text-white rounded-xl text-sm font-semibold p-2 align-middle w-28 border-2 sm:text-lg md:text-lg xl:text-lg sm:font-bold md:font-bold xl:font-bold sm:p-2 md:p-2 xl:p-2 sm:w-32 md:w-36 xl:w-36 sm:border-4 md:border-4 xl:border-4"
      >
        Confirm
      </button>
    </div>
  );
}
