import actionsTypesSearch from "./actionsTypes";

export const addSearch = (searchValue) => {
  return {
    type: actionsTypesSearch.SET_SEARCH,
    payload: searchValue,
  };
};
