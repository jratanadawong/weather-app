import { lastUpdatedAt } from "../helpers";

const setCity = (state, val) => {
  state.city = val;
};
const setForecastType = (state, val) => {
  state.forecastType = val;
};

const viewForecast = (state) => {
  state.forecastType = "forecast";
};

const updateLastUpdated = (state) => {
  state.lastUpdated = lastUpdatedAt();
};

export const mutations = {
  setCity,
  setForecastType,
  viewForecast,
  updateLastUpdated,
};
