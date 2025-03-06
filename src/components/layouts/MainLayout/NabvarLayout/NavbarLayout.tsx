import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeChanger from "@/components/ui/ThemeChanger";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

const NavbarLayout = () => {
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
        <div className="navbar bg-primary text-base-100 ">
          <div className="flex-1">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="logo" width={40} height={40} />
              <a className="btn btn-ghost text-xl p-0">CalorieMate</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeChanger />
            <div className="avatar">
              <div className="w-10 h-10 rounded-full">
                <Image src="/images/avatar-1.svg" alt="picture" width={10} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarLayout;
