import { createStore } from "redux";

const initialState = {
  weatherData: [],
  paginationData: [],
  currentPage: [],
};

const weatherReducer = (state = initialState, action) => {
  if (action.type === "GETWEATHER") {
    return {
      weatherData: action.loadedData,
      paginationData: state.paginationData,
      currentPage: state.currentPage,

    };
  }
  if (action.type === "CHANGE_SLICE") {
    return {
      weatherData: state.weatherData,
      paginationData: action.weatherSlice,
      currentPage: state.currentPage,
    };
  }
  if (action.type === "COUNTER_PAGE") {
    return {
      weatherData: state.weatherData,
      paginationData: state.paginationData,
      currentPage: action.startIndex,
    };
  }
  return state;
};

const store = createStore(weatherReducer);

export default store;
