import { formatDate } from "./index.js";

const isDueDate = (date) => {
  const today = formatDate(Date.now());
  const newDate = formatDate(date);

  if (newDate.year < today.year) {
    return true;
  } else if (newDate.year === today.year) {
    if (today.monthNumber > newDate.monthNumber) {
      return true;
    } else if (today.monthNumber === newDate.monthNumber) {
      if (today.dayNumber > newDate.dayNumber) {
        return true;
      }
    }
  }
  return false;
};

export default isDueDate;
