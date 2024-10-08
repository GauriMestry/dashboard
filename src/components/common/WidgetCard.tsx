import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Category } from "../../redux/initialState";
import { openWidgetModal } from "../../redux/slices/modalSlice";
import BarChart from "./BarChart";
import Button from "./Button";
import Card from "./Card";
import DoughnutChart from "./DoughnutChart";
import NoChart from "./NoChart";
import TextChart from "./TextChart";

type WidgetProps = {
  category: Category;
};

export default function WidgetCard({ category }: WidgetProps): ReactElement {
  const dispatch = useDispatch();
  const filteredWidgets = category?.widgets?.filter((wid) => wid?.visibility);
  const buttonClick = () => dispatch(openWidgetModal());

  return (
    <>
      {filteredWidgets?.length && (
        <div className="flex flex-col items-center sm:flex-row md:flex-row xl-flex-row sm:flex-wrap md:flex-wrap xl:flex-wrap">
          {filteredWidgets?.map((widget, index) => (
            <Card
              key={widget?.id + index}
              Component={
                <>
                  {widget?.name !== undefined && (
                    <h5 className="font-sans text-sm font-semibold sm:text-lg md:text-lg xl:text-lg sm:font-bold md:font-bold xl:font-bold">
                      {widget?.name}
                    </h5>
                  )}
                  {widget?.chartType === "doughnut" &&
                  widget?.chartData !== undefined ? (
                    <DoughnutChart widget={widget} />
                  ) : widget?.chartType === "bar" &&
                    widget?.chartData !== undefined ? (
                    <BarChart widget={widget} />
                  ) : widget?.chartType === "text" &&
                    widget?.chartData !== undefined ? (
                    <TextChart des={widget?.des} />
                  ) : (
                    <NoChart />
                  )}
                </>
              }
            />
          ))}
          <Card
            Component={
              <div className="h-full flex flex-col items-center justify-center">
                <Button
                  buttonClick={buttonClick}
                  bg="white"
                  flexOption="flex-row"
                />
              </div>
            }
          />
        </div>
      )}
    </>
  );
}
