import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/DashboardLayout";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/home/dashboardV2" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
