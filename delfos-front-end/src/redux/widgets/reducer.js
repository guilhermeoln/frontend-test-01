import uuid from "react-uuid";
import actionsTypesWidgets from "./actionsTypes";

const initialState = {
  widgets: [
    {
      id: uuid(),
      type: "line",
      text: "Valores Mensais",
      categories: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
      textY: "Valores",
      series: [
        {
          name: "Série 1",
          data: [10, 20, 30, 40, 50, 60],
        },
      ],
    },
  ],
};

export default function widgetsReducer(state = initialState, action) {
  if (action.type === actionsTypesWidgets.ADD_WIDGET) {
    return {
      ...state,
      widgets: [...state.widgets, action.payload],
    };
  }

  return state;
}
