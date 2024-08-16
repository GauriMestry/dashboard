import { ReactElement } from "react";
import { Bar } from "react-chartjs-2";

type CommonProps = {
  data: number[];
  labels: string[];
  colours: string[];
  widgetName: string;
};
function BarCommon({
  data,
  labels,
  widgetName,
  colours,
}: CommonProps): ReactElement {
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: widgetName,
            data,
            backgroundColor: colours,
          },
        ],
      }}
      options={{
        indexAxis: "y",
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
      }}
    />
  );
}

export default BarCommon;
