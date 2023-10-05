export const textOnly = (value: string) => {
  return value.replace(/[^a-zA-Z\u00C0-\u00FF ]+/g, "");
};
