import { MENU_ITEMS } from "../MainLayout.constants";
import { signOut } from "next-auth/react";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const BottomMenuLayout = () => {
  const router = useRouter();
  return (
    <div className="btm-nav lg:hidden">
      {MENU_ITEMS.map((item, index) => (
        <Link href={item.href} key={`menu-btn-${index}`} className={cn("", { "active text-primary": router.pathname === item.href })}>
          <span className="text-xl">{item.icon}</span>
        </Link>
      ))}
      <button className="text-error" onClick={() => signOut({ callbackUrl: "/" })}>
        <span className="text-xl">
          <Image src={"/images/logout.svg"} width={20} height={20} alt={"logout"} />
        </span>
      </button>
    </div>
  );
};

export default BottomMenuLayout;
