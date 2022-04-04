const updateCity = (context, val) => {
  context.commit('setCity', val);
  context.commit('setForecastType', 'current');
};

export const actions = {
  updateCity,
};
