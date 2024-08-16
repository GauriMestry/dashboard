import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category, WidgetState } from "../../redux/initialState";
import { setWidgetForUpdate } from "../../redux/slices/widgetSlice";
import { RootState } from "../../redux/store";
import Checkbox from "../common/Checkbox";
import NewWidgetForm from "../NewWidgetForm";

type ContentProps = {
  id: number;
};
export type CheckedWidget = {
  widgetId: number;
  visibility: boolean;
};
export default function Cwpm({ id }: ContentProps): ReactElement {
  const dispatch = useDispatch();

  const existingWidgets = useSelector(
    (state: RootState) => state?.widgetOperator?.updatedWidgets
  );
  const categories: Category[] = useSelector(
    (state: RootState) => state?.widgetOperator?.categories
  );
  const filteredWidgets: WidgetState[] =
    categories?.find((category) => category?.id === id)?.widgets ?? [];

  const handleCheckboxChanged = (widget: CheckedWidget) => {
    const updatedWidgets = existingWidgets.some(
      (w) => w.widgetId === widget.widgetId
    )
      ? existingWidgets.map((w) =>
          w.widgetId === widget.widgetId ? widget : w
        )
      : [...existingWidgets, widget];

    dispatch(setWidgetForUpdate(updatedWidgets));
  };

  return (
    <>
      <ul>
        {filteredWidgets?.map((wid, index) => (
          <li
            key={wid?.id + index}
            className="flex flex-row justify-start gap-2 items-center border-full rounded-md border-2 p-2 m-2 font-semibold text-widgetText"
          >
            <Checkbox
              checked={wid?.visibility}
              label={wid?.name}
              id={wid?.id}
              handleCheckboxChanged={handleCheckboxChanged}
            />
          </li>
        ))}
      </ul>
      <NewWidgetForm categoryId={id} />
    </>
  );
}
