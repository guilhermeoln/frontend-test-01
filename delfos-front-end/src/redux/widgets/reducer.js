import uuid from "react-uuid";
import actionsTypesWidgets from "./actionsTypes";
import { filterWidgets } from "./actions";

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
  filteredWidgets: [],
};

export default function widgetsReducer(state = initialState, action) {
  if (action.type === actionsTypesWidgets.ADD_WIDGET) {
    return {
      ...state,
      widgets: [...state.widgets, action.payload],
    };
  } else if (action.type === actionsTypesWidgets.REMOVE_WIDGET) {
    return {
      ...state,
      widgets: state.widgets.filter(
        (widget) => widget.id !== action.payload.id
      ),
    };
  } else if (action.type === actionsTypesWidgets.FILTER_WIDGETS) {
    const copyWidgets = state.widgets.slice();

    const filteredWidgets = copyWidgets.filter((widget) =>
      widget.text.toLowerCase().includes(action.payload.toLowerCase())
    );

    return {
      ...state,
      filteredWidgets: filteredWidgets,
    };
  }

  return state;
}
