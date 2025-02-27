import { BiSolidDashboard } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";
import { BsJournal } from "react-icons/bs";

const MENU_ITEMS = [
  { label: "Dashboard", href: "/main/dashboard", icon: <BiSolidDashboard /> },
  { label: "Daily Log", href: "/main/daily-log", icon: <BsJournal /> },
  { label: "My Recipes", href: "/main/recipe", icon: <SlBookOpen /> },
  { label: "Report", href: "/main/report", icon: <TbReportAnalytics /> },
];

export { MENU_ITEMS };
