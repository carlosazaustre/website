export const orderByDate = (prev, current) =>
  new Date(current.date) - new Date(prev.date);
