import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { ReactElement } from "react";
import { WidgetState } from "../../redux/initialState";
import DoughnutCommon from "./DoughnutCommon";
import LegendList from "./LegendList";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  widget: WidgetState;
};

export type TLegend = {
  label: string;
  color: string;
  value: number;
};

export default function DoughnutChart({
  widget,
}: DoughnutChartProps): ReactElement {
  const { chartData } = widget ?? {};

  const data: number[] = widget?.chartData?.map((d) => d?.value);
  const labels: string[] = widget?.chartData?.map((d) => d?.label);
  const colours: string[] = widget?.chartData?.map((d) => d?.color);
  const legendList: TLegend[] = chartData?.map((d) => ({
    label: d?.label,
    color: d?.color,
    value: d?.value,
  }));

  return (
    <div className="flex flex-row px-2 pt-4 h-32 justify-between items-center sm:h-48 md:h-48 xl:h-48 sm:px-4 md:px-4 xl:px-4 sm:pt-10 md:pt-10 xl:pt-10">
      <div className="h-32 sm:h-48 md:h-48 xl:h-48">
        <DoughnutCommon
          data={data}
          labels={labels}
          colours={colours}
          widgetName={widget?.name}
        />
      </div>
      <div>
        <LegendList legendList={legendList} />
      </div>
    </div>
  );
}
