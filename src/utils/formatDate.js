const formatDate = (date) => {
  const months = [
    " Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const monthText = months[newDate.getMonth()];
  const monthNumber = newDate.getMonth();
  const dayNumber = newDate.getDate();
  const dayText = days[newDate.getDay()];
  return { year, monthText, monthNumber, dayText, dayNumber };
};

export default formatDate;