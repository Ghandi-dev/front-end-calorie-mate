import { useRouter } from "next/router";
import Image from "next/image";
// import { SIDEBAR_ITEMS } from "../MainLayout.constants";
// import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { MENU_ITEMS } from "../MainLayout.constants";
import { cn } from "@/utils/cn";
import { signOut } from "next-auth/react";
import { BiSolidLogOut } from "react-icons/bi";

// import useSidebarLayout from "../SidebarLayout.tsx/useSidebarLayout";

const NavbarLayout = () => {
  const router = useRouter();
  // const { dataProfile, isLoadingProfile } = useSidebarLayout();

  // State untuk memastikan komponen sudah dimuat di client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set true setelah komponen dimuat di client
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }
  return (
    <Fragment>
      <div className="sticky top-0 z-50 bg-base-100 shadow-lg lg:hidden">
        <div className="navbar bg-primary text-base-100">
          <div className="flex-1">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            <a className="btn btn-ghost text-xl ">CalorieMate</a>
          </div>
          <div className="flex-none gap-2">
            <div className=" avatar">
              <div className="w-10 rounded-full">
                <Image src="/images/avatar-1.svg" alt="picture" width={10} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btm-nav lg:hidden">
        {MENU_ITEMS.map((item, index) => (
          <button key={`menu-btn-${index}`} className={cn("", { "active text-primary": router.pathname === item.href })}>
            <span className="text-xl">{item.icon}</span>
          </button>
        ))}
        <button className="text-error" onClick={() => signOut()}>
          <span className="text-xl">
            <BiSolidLogOut />
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default NavbarLayout;
