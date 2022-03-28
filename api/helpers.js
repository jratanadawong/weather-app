import { OPENWEATHERMAP_API_ENDPOINT } from './constants';

const constructApiEndpoint = (queryType, city) => {
  return OPENWEATHERMAP_API_ENDPOINT + queryType + `?id=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
};

export {
  constructApiEndpoint,
}