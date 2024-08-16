import { BellAlertIcon, TrashIcon } from "@heroicons/react/16/solid";
import { ReactElement, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../redux/initialState";
import { defaultWidgets } from "../redux/slices/widgetSlice";
import { RootState } from "../redux/store";
import dashboardData from "../utils/dashboardData.json";
import BreadCrumb from "./BreadCrumb";

function Header(): ReactElement {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string>("");

  const categories: Category[] = useSelector(
    (state: RootState) => state?.widgetOperator?.categories
  );

  const filterCategories = useMemo(
    () =>
      categories?.filter((category) =>
        category?.widgets?.some((wid) =>
          wid?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
        )
      ),
    [categories, searchText]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(defaultWidgets(filterCategories));
    }
  };

  return (
    <div className="h-fit sm:h-16 md:h-16 xl:h-16 bg-white">
      <hr className="bg-purple-800 h-1 mx-0" />
      <div className="sm:px-10 md:px-10 xl:px-10 gap-4 sm:w-full md:w-full xl:w-full flex flex-col items-center sm:justify-evenly md:justify-around xl:justify-evenly  sm:flex-row md:flex-row xl:flex-row">
        <div className="flex-1">
          <BreadCrumb />
        </div>
        <input
          value={searchText}
          placeholder="Enter Text to search"
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearchText(e?.currentTarget?.value)}
          className="border-2 sm:mt-2 md:mt-2 xl:mt-2 sm:mr-20 md:mr-20 xl:mr-20 sm:w-1/3 md:w-1/3 xl:w-1/3 pl-4 rounded-md h-10 bg-blueBg border-blueLight focus:border-blueLight"
        />
        <button
          className="text-blueMain"
          title="Clear Search"
          onClick={() => {
            setSearchText("");
            dispatch(defaultWidgets(dashboardData?.data?.categories));
          }}
        >
          <TrashIcon className="size-4 md:size-6 " />
        </button>
        <div className="text-blueLight ">
          <BellAlertIcon className="size-4 md:size-6" />
        </div>
      </div>
    </div>
  );
}

export default Header;
