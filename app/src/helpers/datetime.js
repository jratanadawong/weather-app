const isToday = (date) => {
  const today = new Date();
  const forecastDate = new Date(date * 1000);
  return forecastDate.getDate() == today.getDate() && forecastDate.getMonth() == today.getMonth() && forecastDate.getYear() == today.getYear();
};

const getDay = (date) => {
  if (isToday(date)) { 
    return "Today";
  } else {
    const forecastDate = new Date(date * 1000);
    return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(forecastDate);
  }
};

export {
  isToday,
  getDay,
};