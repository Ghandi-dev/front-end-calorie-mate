import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "../MainLayout.constants";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import useSidebarLayout from "./useSidebarLayout";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeChanger from "@/components/ui/ThemeChanger";

const SidebarLayout = () => {
  const router = useRouter();
  const { dataProfile, isLoadingProfile } = useSidebarLayout();

  return (
    <aside className="w-64 h-full bg-base-100 p-6 shadow-md hidden lg:flex flex-col gap-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <span className="text-xl font-bold text-content">CalorieMate</span>
      </div>

      {/* Profile Section */}
      <div className="text-center">
        {!isLoadingProfile ? (
          // Skeleton Avatar & Nama
          <>
            <Image src={dataProfile?.avatar || "/images/avatar-1.svg"} alt="profile" width={80} height={80} className="rounded-full mx-auto" />
            <p className="mt-2 font-semibold">{dataProfile?.fullname || "User Name"}</p>
            <div className="flex gap-2">
              <LanguageSwitcher />
              <ThemeChanger />
            </div>
          </>
        ) : (
          <>
            <div className="skeleton w-20 h-20 rounded-full mx-auto"></div>
            <div className="skeleton h-4 w-32 mt-2 mx-auto"></div>
          </>
          // Data Profil Sesungguhnya
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
              "font-bold text-base-100 bg-primary": router.pathname.includes(item.href),
            })}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{router.locale === "id" ? item.label.id : item.label.en}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button onClick={() => signOut({ callbackUrl: "/" })} className="btn mt-auto bg-error text-white py-2 px-4 rounded-lg">
        Logout
      </button>
    </aside>
  );
};

export default SidebarLayout;
