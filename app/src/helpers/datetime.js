const isToday = (date) => {
  const today = new Date();
  const forecastDate = new Date(date);
  return forecastDate.getDate() == today.getDate() && forecastDate.getMonth() == today.getMonth() && forecastDate.getYear() == today.getYear();
};

const getDay = (date) => {
  if (isToday(date)) {
    return "Today";
  } else {
    const forecastDate = new Date(date);
    const day = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(forecastDate);
    return day;
  }
};

const lastUpdatedAt = () => {
  return new Date().toLocaleDateString("en-US", {hour: "numeric", minute: "numeric", second: "numeric"});
}

const formatDateTime = (date) => {
  return new Date(date).toLocaleDateString("en-US", {hour: "numeric", minute: "numeric", second: "numeric"});
}

export {
  isToday,
  getDay,
  lastUpdatedAt,
  formatDateTime,
};