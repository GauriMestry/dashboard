import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { openWidgetModal } from "../redux/slices/modalSlice";
import { defaultWidgets } from "../redux/slices/widgetSlice";
import dashboardData from "../utils/dashboardData.json";
import Button from "./common/Button";
function ContentHeader(): ReactElement {
  const dispatch = useDispatch();
  return (
    <div className="flex h-32 items-center justify-evenly flex-col sm:flex-row md:flex-row xl:flex-row sm:justify-between md:justify-between xl:justify-between mt-5 sm-mt-10 md:mt-10 xl:mt-10 sm:mx-10 md:mx-10 xl:md-10">
      <h3 className="font-sans text-xl font-semibold sm:text2xl md:text-2xl xl:text-2xl sm:font-bold md:font-bold xl:font-bold">
        CNAPP Dashboard
      </h3>
      <div className="flex flex-row w-96 justify-evenly sm:w:1/3 md:w-1/3 xl:1/3">
        <Button
          buttonClick={() => dispatch(openWidgetModal())}
          bg="white"
          flexOption="flex-row-reverse"
        />
        <button
          onClick={() =>
            dispatch(defaultWidgets(dashboardData?.data?.categories))
          }
          className="bg-white rounded-xl text-sm font-semibold text-grayDark border-1 p-2 border-grayLight sm:text-lg md:text-lg xl:text-lg sm:font-bold md:font-bold xl:font-bold sm:p-4 md:p-4 xl:p-4 sm:border-2 md:border-2 xl:border-2"
        >
          <ArrowPathIcon className="size-4 md:size-6" />
        </button>
        <select className="bg-white rounded-md text-sm font-semibold text-indigoDark p-2 flex flex-row items-center justify-between w-fit border-1 border-indigoDark sm:text-lg md:text-lg xl:text-lg sm:font-bold md:font-bold xl:font-bold sm:p-4 md:p-4 xl:p-4 sm:border-2 md:border-2 xl:border-2">
          <option selected className="md:p-2">
            Last 2 days
          </option>
          <option selected className="md:p-2">
            Last 5 days
          </option>
          <option selected className="md:p-2">
            Last 10 days
          </option>
        </select>
      </div>
    </div>
  );
}

export default ContentHeader;
