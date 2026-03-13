export const parseEventDate = (dateISO: string) => {
  const parts = dateISO.split("-").map(Number);

  if (parts.length === 3 && parts.every((part) => Number.isFinite(part))) {
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  return new Date(dateISO);
};

export const formatEventDate = (
  dateISO: string,
  options: Intl.DateTimeFormatOptions,
) => parseEventDate(dateISO).toLocaleDateString("en-US", options);

export const compareEventDatesAsc = (aDateISO: string, bDateISO: string) =>
  parseEventDate(aDateISO).getTime() - parseEventDate(bDateISO).getTime();

export const compareEventDatesDesc = (aDateISO: string, bDateISO: string) =>
  compareEventDatesAsc(bDateISO, aDateISO);

export const getStartOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
