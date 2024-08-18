import { useState } from "react";
import { CheckedWidget } from "../tabs/Cwpm";

type CheckBoxInputProps = {
  id: number;
  checked: boolean;
  label: string;
  handleCheckboxChanged: (widget: CheckedWidget) => void;
};

function Checkbox({
  id,
  checked,
  label,
  handleCheckboxChanged,
}: CheckBoxInputProps) {
  const [checkBoxChecked, setcheckBoxChecked] = useState(checked);

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="accent-widgetText"
        id="customCheckbox"
        checked={checkBoxChecked}
        onChange={() => {
          setcheckBoxChecked(!checkBoxChecked);
          handleCheckboxChanged({ widgetId: id, visibility: !checkBoxChecked });
        }}
      />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
