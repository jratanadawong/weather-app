const isToday = (date) => {
  const today = new Date();
  const forecastDate = new Date(date * 1000);
  console.log('forecastDate: ', forecastDate.getDate());
  return forecastDate.getDate() == today.getDate() && forecastDate.getMonth() == today.getMonth() && forecastDate.getYear() == today.getYear();
};

const isTomorrow = (date) => {
  const today = new Date();
  const secondsInADay = 86400;
  const forecastDate = new Date(date * 1000);
  // return forecastDate.getDate() == today.getDate() + 1 && forecastDate.getMonth() == today.getMonth() && forecastDate.getYear() == today.getYear();
};

const getDay = (date) => {
  if (isToday(date)) { 
    return "Today";
  } else {
    console.log("not today!");
    const forecastDate = new Date(date * 1000);
    return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(forecastDate);
  }
};

export {
  isToday,
  isTomorrow,
  getDay,
};