export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
}; // changement des index pour partir de 0

export const getMonth = (date) => MONTHS[date.getMonth()];
