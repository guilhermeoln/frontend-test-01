import actionsTypesWidgets from "./actionsTypes";

export const addWidget = (widget) => {
  return {
    type: actionsTypesWidgets.ADD_WIDGET,
    payload: widget,
  };
};

export const removeWidget = (widget) => {
  return {
    type: actionsTypesWidgets.REMOVE_WIDGET,
    payload: widget,
  };
};
