import { CheckedWidget } from "../components/tabs/Cwpm";

export type TChartData = {
  label: string;
  value: number;
  color: string;
};

export type WidgetState = {
  id: number;
  name: string;
  des: string;
  chartType: string;
  visibility: boolean;
  chartData?: TChartData[];
};

export type Category = {
  id: number;
  name: string;
  widgets: WidgetState[];
};

export type modals = {
  addWidgetModal?: boolean;
};

export type CategoryID = number;

export type NewWidgetType = {
  newwidget: WidgetState;
  categoryId?: CategoryID;
};
type InitialState = {
  categories: Category[];
  modals: {
    addWidgetModal: boolean;
  };
  updatedWidgets: CheckedWidget[];
  newWidgetState: NewWidgetType;
};

export const initialState: InitialState = {
  categories: [
    {
      id: 0,
      name: "categorySample",
      widgets: [
        {
          id: 0,
          name: "wid1",
          des: "des",
          chartType: "doughnut",
          visibility: true,
          chartData: [
            {
              label: "Label1",
              value: 10235,
              color: "#ffffff",
            },
          ],
        },
      ],
    },
  ],
  modals: {
    addWidgetModal: false,
  },
  updatedWidgets: [],
  newWidgetState: {
    newwidget: {
      name: "",
      des: "",
      id: Math.random(),
      chartType: "text",
      visibility: true,
    },
    categoryId: 0,
  },
};
