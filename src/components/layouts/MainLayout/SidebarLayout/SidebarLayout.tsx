import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "../MainLayout.constants";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import { BiSolidLogOut } from "react-icons/bi";
import useSidebarLayout from "./useSidebarLayout";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const SidebarLayout = () => {
  const router = useRouter();
  const { dataProfile, isLoadingProfile } = useSidebarLayout();

  // State untuk memastikan komponen sudah dimuat di client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set true setelah komponen dimuat di client
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <aside className="w-64 h-full bg-white p-6 shadow-md hidden lg:flex flex-col gap-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <span className="text-xl font-bold text-neutral">CalorieMate</span>
      </div>

      {/* Profile Section */}
      <div className="text-center">
        {isLoadingProfile ? (
          // Skeleton Avatar & Nama
          <>
            <div className="skeleton w-20 h-20 rounded-full mx-auto" suppressHydrationWarning></div>
            <div className="skeleton h-4 w-32 mt-2 mx-auto" suppressHydrationWarning></div>
          </>
        ) : (
          // Data Profil Sesungguhnya
          <>
            <Image src={dataProfile?.avatar || "/images/avatar-1.svg"} alt="profile" width={80} height={80} className="rounded-full mx-auto" />
            <p className="mt-2 font-semibold">{dataProfile?.fullname || "User Name"}</p>
            <LanguageSwitcher />
          </>
        )}
      </div>

      {/* Divider */}
      <div className="divider m-0"></div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-4">
        {MENU_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn("flex items-center gap-3 p-2 rounded-lg transition", {
              "font-bold text-base-100 bg-primary": isMounted && router.pathname === item.href,
            })}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button onClick={() => signOut({ callbackUrl: "/" })} className="btn mt-auto bg-error text-white py-2 px-4 rounded-lg">
        <BiSolidLogOut />
        Logout
      </button>
    </aside>
  );
};

export default SidebarLayout;
