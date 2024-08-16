import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DrawerActions from "./DrawerActions";
import DrawerContent from "./DrawerContent";
import DrawerHeader from "./DrawerHeader";

export default function Drawer(): ReactElement {
  const modalOpen = useSelector(
    (state: RootState) => state.modalOperator.modals.addWidgetModal ?? false
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full h-full sm:w-1/12 md:w-1/2 xl:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          modalOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col min-h-screen justify-between">
          <div className="flex-1">
            <DrawerHeader />
            <DrawerContent />
          </div>
          <DrawerActions />
        </div>
      </div>
    </>
  );
}
