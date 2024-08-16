import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { WidgetState } from "../../redux/initialState";
import BarCommon from "./BarCommon";
import { TLegend } from "./DoughnutChart";
import LegendList from "./LegendList";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type BarChartProps = {
  widget: WidgetState;
};

export default function BarChart({ widget }: BarChartProps) {
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
    <div className="flex flex-row px-2 pt-4 h-32 justify-between items-center sm:h-48 md:h-48 xl:h-48 sm:pt-10 md:pt-10 xl:pt-10">
      <div className="h-30 w-48 sm:h-48 md:h-48 xl:h-48 sm:pt-10 md:pt-10 xl:pt-10">
        <BarCommon
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
