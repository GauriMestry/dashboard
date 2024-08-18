import { StopIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { TLegend } from "./DoughnutChart";

type LegendProps = {
  legendList: TLegend[];
};

export default function LegendList({ legendList }: LegendProps): ReactElement {
  return (
    <ul>
      {legendList?.map((legendD, index) => (
        <li
          key={legendD?.label + index}
          className="flex flex-row md:items-center gap-4"
        >
          <StopIcon color={legendD?.color} className="font-bold size-4" />
          <h6 className="font-sans font-xs text-xs sm:text-md md:text-md xl:text-md sm:font-semibold md:font-semibold xl:font-semibold">
            {legendD?.label}({legendD?.value})
          </h6>
        </li>
      ))}
    </ul>
  );
}
