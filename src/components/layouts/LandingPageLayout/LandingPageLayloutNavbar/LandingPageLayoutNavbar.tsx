import { BUTTON_ITEMS } from "../LandingPageLayout.constants";
import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Link from "next/link";
import ThemeChanger from "@/components/ui/ThemeChanger";

const LandingPageLayoutNavbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-lg">
      <div className="navbar bg-primary text-base-100">
        <div className="flex-1">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            <a className="btn btn-ghost text-xl p-0">CalorieMate</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeChanger />
          <ul className="menu menu-horizontal px-1">
            {BUTTON_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="btn btn-sm btn-accent text-accent-content ">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayoutNavbar;
