export const splitName = (name) => {
  const regExp = /\(([^)]+)\)/; // get the item between parens ()
  return name.split(regExp);
};
