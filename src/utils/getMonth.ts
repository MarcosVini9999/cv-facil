export const months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export function getMonth(month: number | string | undefined) {
  if (typeof month === "number") return months[month];
  else if (typeof month === "string") return months.indexOf(month);
  else return -1;
}
