import actionsTypesWidgets from "./actionsTypes";

export const addWidget = (widget) => {
  return {
    type: actionsTypesWidgets.ADD_WIDGET,
    payload: widget,
  };
};
