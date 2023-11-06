const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // 0-based index
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const combinedString = `${year.toString().slice(-2)}${month
  .toString()
  .padStart(2, "0")}${day.toString().padStart(2, "0")}${hour
  .toString()
  .padStart(2, "0")}${minutes.toString().padStart(2, "0")}${seconds
  .toString()
  .padStart(2, "0")}`;

export const ORDER_NUMBER = "DPS" + combinedString;
