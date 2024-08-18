import { useDispatch, useSelector } from "react-redux";
import { setNewWidgetState } from "../redux/slices/widgetSlice";
import { RootState } from "../redux/store";

export default function NewWidgetForm({ categoryId }: { categoryId: number }) {
  const dispatch = useDispatch();

  const newWidgetState = useSelector(
    (state: RootState) => state?.widgetOperator?.newWidgetState
  );

  return (
    <>
      <div className="flex flex-col justify-start gap-6 items-center h-fit md:w-96 sm:w-96 rounded-md border-2 p-2 m-2 font-semibold text-widgetText">
        <div className="flex flex-row gap-2 items-center">
          <label className="flex-1" htmlFor="widgetName">
            Widget Name:
          </label>
          <input
            id="widgetName"
            value={newWidgetState?.newwidget?.name}
            onChange={(e) => {
              dispatch(
                setNewWidgetState({
                  newwidget: {
                    ...newWidgetState.newwidget,
                    name: e?.target?.value,
                  },
                  categoryId: categoryId,
                })
              );
            }}
            className="border-2 w-36 sm:w-1/2 md:w-1/2 xl:w-1/2 pl-2 rounded-md h-10 border-indigoDark focus:border-blueLight"
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label className="" htmlFor="widgetName">
            Widget Description:
          </label>
          <textarea
            rows={2}
            cols={30}
            id="widgetText"
            value={newWidgetState?.newwidget?.des}
            onChange={(e) =>
              dispatch(
                setNewWidgetState({
                  newwidget: {
                    ...newWidgetState.newwidget,
                    des: e?.target?.value,
                  },
                  categoryId: categoryId,
                })
              )
            }
            className="border-2 w-full sm:w-80 md:w-80 xl:w-80 sm:h-28 md:h-28 xl:h-28 pl-2 rounded-md h-10 border-indigoDark focus:border-blueLight"
          />
        </div>
      </div>
    </>
  );
}
