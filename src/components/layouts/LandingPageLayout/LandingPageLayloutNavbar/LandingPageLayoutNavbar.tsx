import { BUTTON_ITEMS } from "../LandingPageLayout.constants";
import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Link from "next/link";

const LandingPageLayoutNavbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-lg">
      <div className="navbar bg-primary text-base-100">
        <div className="flex-1">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <a className="btn btn-ghost text-xl ">CalorieMate</a>
        </div>
        <div className="flex-none">
          <LanguageSwitcher />
          <ul className="menu menu-horizontal px-1">
            {BUTTON_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="btn btn-sm btn-secondary text-base-100 hover:bg-base-100 hover:text-secondary">
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
