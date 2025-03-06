import { BiSolidDashboard } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import { BsJournal } from "react-icons/bs";

const MENU_ITEMS = [
  { label: { id: "Dashboard", en: "Dashboard" }, href: "/main/dashboard", icon: <BiSolidDashboard /> },
  { label: { id: "Catatan Harian", en: "Daily Log" }, href: "/main/daily-log", icon: <BsJournal /> },
  { label: { id: "Laporan", en: "Report" }, href: "/main/report", icon: <TbReportAnalytics /> },
  { label: { id: "Resep Makanan", en: "Food Recipe" }, href: "/main/recipe", icon: <SlBookOpen /> },
];

export { MENU_ITEMS };
