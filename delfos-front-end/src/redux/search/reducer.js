import actionsTypesSearch from "./actionsTypes";

const initialState = {
  search: "",
};

export default function searchReducer(state = initialState, action) {
  if (action.type === actionsTypesSearch.SET_SEARCH) {
    return { ...state, search: action.payload };
  } else if (action.type === actionsTypesSearch.CLEAR_SEARCH) {
    return {
      ...state,
      search: "",
    };
  }

  return state;
}
