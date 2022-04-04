import { lastUpdatedAt } from "../helpers";

const setCity = (state, val) => {
  state.city = val;
};

const viewForecast = (state) => {
  console.log('forecastType: ', state.forecastType);
  state.forecastType = "forecast";
};

const updateLastUpdated = (state) => {
  state.lastUpdated = lastUpdatedAt();
};

export const mutations = {
  setCity,
  viewForecast,
  updateLastUpdated,
};
