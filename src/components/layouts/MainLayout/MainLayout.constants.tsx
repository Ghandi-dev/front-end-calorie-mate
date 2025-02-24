import { BiSolidDashboard } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { SlBookOpen } from "react-icons/sl";

const MENU_ITEMS = [
  { label: "Dashboard", href: "/main/dashboard", icon: <BiSolidDashboard /> },
  { label: "My Recipes", href: "/main/recipes", icon: <SlBookOpen /> },
  { label: "Report", href: "/main/report", icon: <TbReportAnalytics /> },
];

export { MENU_ITEMS };
