import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { defaultWidgets } from "../redux/slices/widgetSlice";
import dashboardData from "../utils/dashboardData.json";
import Categories from "./Categories";
import ContentHeader from "./ContentHeader";
import Header from "./Header";
import Drawer from "./common/Drawer";

export default function Dashboard(): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultWidgets(dashboardData?.data?.categories));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#DBEAFE]">
      <Header />
      <ContentHeader />
      <Categories />
      <Drawer />
    </div>
  );
}
