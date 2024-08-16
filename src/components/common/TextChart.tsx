import { ReactElement } from "react";

export default function TextChart({ des }: { des: string }): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center h-2/3">
      <span className="p-2">Widget Description</span>
      <div className="border-2 rounded-xl w-full p-2 h-fit">{des}</div>
    </div>
  );
}
