import { parseAbsoluteToLocal } from "@internationalized/date";
import { DateValue } from "@nextui-org/react";

const standardDate = (date: number) => {
  if (date < 10) {
    return `0${date}`;
  }
  return date;
};

const toDateStandard = (date: DateValue) => {
  const year = date.year;
  const month = date.month;
  const day = date.day;

  const hour = "hour" in date ? date.hour : 0;
  const minute = "minute" in date ? date.minute : 0;
  const second = "second" in date ? date.second : 0;

  const result = `${standardDate(year)}-${standardDate(month)}-${standardDate(day)} ${standardDate(hour)}:${standardDate(minute)}:${standardDate(second)}`;
  return result;
};

const toInputDate = (date: string) => {
  const formattedDate = date.trim().replace(" ", "T");

  // Ensure month and day are two digits
  const isoDate = formattedDate.replace(
    /(\d{4})-(\d{1,2})-(\d{1,2})/,
    (_, year, month, day) =>
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
  );

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

export { toDateStandard, toInputDate, convertTime };
