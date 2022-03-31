const convertKelvinToC = (temp) => {
  return temp - 273.15;
};

const convertKelvinToF = (temp) => {
  return (temp - 273.15) * 9/5 + 32;
};

export {
  convertKelvinToC,
  convertKelvinToF,
};
