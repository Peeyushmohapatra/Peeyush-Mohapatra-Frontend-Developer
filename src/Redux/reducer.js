export const reducer = (state = { capsule: [],search:[]}, action) => {
  if (action.type === "capsule-data") {
    return {
      ...state,
      capsule: action.data,
    };
  }
  else if(action.type === "search"){
    return {
        ...state,
        search:action.data
    }
  }
  return state;
};
