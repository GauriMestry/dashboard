import { ReactElement } from "react";
import { Doughnut } from "react-chartjs-2";

type CommonProps = {
  data: number[];
  labels: string[];
  colours: string[];
  widgetName: string;
};

export default function DoughnutCommon({
  data,
  labels,
  widgetName,
  colours,
}: CommonProps): ReactElement {
  return (
    <Doughnut
      data={{
        labels,
        datasets: [
          {
            label: widgetName,
            data,
            backgroundColor: colours,
            hoverOffset: 4,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
