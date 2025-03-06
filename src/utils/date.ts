import { parseAbsoluteToLocal } from "@internationalized/date";

const standardDate = (date: number) => {
  if (date < 10) {
    return `0${date}`;
  }
  return date;
};

const toDateStandard = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const result = `${standardDate(year)}-${standardDate(month)}-${standardDate(day)} ${standardDate(hour)}:${standardDate(minute)}:${standardDate(second)}`;
  return result;
};

const toInputDate = (date: string) => {
  const formattedDate = date.trim().replace(" ", "T");

  // Ensure month and day are two digits
  const isoDate = formattedDate.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, (_, year, month, day) => `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);

  return parseAbsoluteToLocal(`${isoDate}+07:00`);
};

const convertTime = (isoDate: string) => {
  const dateObject = new Date(isoDate);
  const date = dateObject.toLocaleDateString("id-ID", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Jakarta",
  });
  return `${date} WIB`;
};

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("id-ID", { day: "2-digit", month: "short" });
};

export { toDateStandard, toInputDate, convertTime, formatDate };
