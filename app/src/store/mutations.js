const setCity = (state, val) => {
  state.city = val;
};

const viewForecast = (state) => {
  console.log('forecastType: ', state.forecastType);
  state.forecastType = "forecast";
};
export const mutations = {
  setCity,
  viewForecast,
};
