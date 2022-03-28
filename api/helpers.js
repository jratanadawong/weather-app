import { OPENWEATHERMAP_API_ENDPOINT } from './constants';

// We don't have a way to query the IDs of cities, so using an enum to track the ones we have
const cityEnum = {
  toronto: 6167865,
  ottawa: 6094817,
  tokyo: 1850147,
};

// Constructs the API query
const constructQuery = (queryType, city) => {
  return OPENWEATHERMAP_API_ENDPOINT + queryType
    + `?id=${cityEnum[city]}&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
};

export {
  constructQuery,
};