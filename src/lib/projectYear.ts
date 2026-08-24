export const getProjectStartYear = (year?: string) => {
  if (typeof year !== "string") return Number.NEGATIVE_INFINITY;

  const match = year.trim().match(/^(\d{4})/);
  return match ? Number(match[1]) : Number.NEGATIVE_INFINITY;
};

export const isPresentYearRange = (year?: string) =>
  typeof year === "string" && year.toLowerCase().includes("present");

export const compareProjectYearsDesc = (aYear?: string, bYear?: string) => {
  const aStart = getProjectStartYear(aYear);
  const bStart = getProjectStartYear(bYear);

  if (aStart !== bStart) return bStart - aStart;

  const aPresent = isPresentYearRange(aYear);
  const bPresent = isPresentYearRange(bYear);
  if (aPresent !== bPresent) return aPresent ? -1 : 1;

  return (bYear ?? "").localeCompare(aYear ?? "", undefined, {
    sensitivity: "base",
  });
};

export const compareProjectsByRecencyDesc = <T extends { year?: string }>(
  a: T,
  b: T,
) => compareProjectYearsDesc(a.year, b.year);
