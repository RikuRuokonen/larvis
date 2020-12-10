
export const getTotalAcquisitions = (data) =>  data.reduce((acc, obj) => acc + obj.sites, 0);

export const sortByMonthAndDay = (data) => data.sort(((a, b) => {
    if(a.month !== b.month) {
      return (a.month - b.month)
    } else if(a.dayOfMonth !== b.dayOfMonth) {
      return (a.dayOfMonth - b.dayOfMonth)
    }
    return 0;
  }
));

export const parseDailyAcquisitions = (data) => {
  const reducedPerDay = data.reduce((acc, item) => {
    const date = new Date(item.timestamp * 1000);
    const key = date.getDate();
    const month = date.getMonth();
    acc[key] = {
      sites: (acc[key] && acc[key].sites || 0) + item.sites,
      month,
   }
    return acc;
  }, Object.create(null));

  const parsedData = Object.entries(reducedPerDay).map(value => {
    return({
      dayOfMonth: value[0],
      sites: value[1].sites,
      month: value[1].month
    })
  });
  const sortedAndParsed =  sortByMonthAndDay(parsedData);
  return sortedAndParsed;
};

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) =>
  localStorage.getItem(key);

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const removeBoundaryDoubleQuotes = (token) => token.replace(/^"|"$/g, '')