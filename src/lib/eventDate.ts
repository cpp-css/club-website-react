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

// Sort semesters in descending order: newer years first, then Fall before Spring within the same year
export const compareSemestersDesc = (aSemester: string, bSemester: string) => {
  // Fall = 2 (later in calendar), Spring = 1 (earlier in calendar)
  const seasonOrder = { Fall: 2, Spring: 1 };

  // Parse "Fall 2026" or "Spring 2025" into [year, seasonNumber]
  const parse = (sem: string) => {
    const m = sem.match(/^(Fall|Spring)\s+(\d{4})$/);
    return [
      Number(m?.[2] ?? 0),
      seasonOrder[m?.[1] as keyof typeof seasonOrder] ?? 0,
    ];
  };

  const [aYear, aSeason] = parse(aSemester);
  const [bYear, bSeason] = parse(bSemester);

  // Compare years first (descending), then seasons (descending) if years are equal
  return bYear - aYear || bSeason - aSeason;
};
