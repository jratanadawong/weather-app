const convertKelvinToC = (temp) => {
  return temp - 273.15;
};

const convertKelvinToF = (temp) => {
  // Farenheit is hella dumb, this is what we have to work with
  return (temp - 273.15) * 9/5 + 32;
};

export {
  convertKelvinToC,
  convertKelvinToF,
};
