import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import WidgetCard from "./common/WidgetCard";

export default function Categories(): ReactElement {
  const categories = useSelector(
    (state: RootState) => state.widgetOperator.categories
  );

  return (
    <div className="container mx-auto w-full">
      <div className="flex flex-col items-center justify-evenly sm:mx-12 md:mx-12 xl:mx-12 md:place-items-start">
        {categories?.map((category, index) => (
          <div
            key={category?.id + index}
            className="flex flex-col items-center justify-evenly md:place-items-start"
          >
            <h4 className="font-sans text-lg font-semibold sm:text-xl md:text-xl xl:text-xl sm:font-bold md:font-bold xl:font-bold">
              {category?.name}
            </h4>
            <WidgetCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
