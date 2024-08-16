import { XMarkIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

function DrawerHeader(): ReactElement {
  const dispatch = useDispatch();
  return (
    <div className="text-white p-4 sm:p-8 md:p-8 xl:p-8 flex flex-row justify-between items-center h-10 sm:h-16 md:h-16 xl:h-16 bg-indigoDark">
      <h6 className="font-sans font-semibold font-sm text-sm sm:text-xl md:text-xl xl:text-xl sm:font-bold md:font-bold xl:font-bold">
        Add widget
      </h6>
      <button onClick={() => dispatch(closeModal())}>
        <XMarkIcon className="size-4 sm:size-6 md:size-6 xl:size-6" />
      </button>
    </div>
  );
}

export default DrawerHeader;
