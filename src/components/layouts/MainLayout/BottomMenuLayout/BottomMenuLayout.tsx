import { BiSolidLogOut } from "react-icons/bi";
import { MENU_ITEMS } from "../MainLayout.constants";
import { signOut } from "next-auth/react";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";

const BottomMenuLayout = () => {
  const router = useRouter();
  return (
    <div className="btm-nav lg:hidden">
      {MENU_ITEMS.map((item, index) => (
        <button key={`menu-btn-${index}`} className={cn("", { "active text-primary": router.pathname === item.href })}>
          <span className="text-xl">{item.icon}</span>
        </button>
      ))}
      <button className="text-error" onClick={() => signOut({ callbackUrl: "/" })}>
        <span className="text-xl">
          <BiSolidLogOut />
        </span>
      </button>
    </div>
  );
};

export default BottomMenuLayout;
