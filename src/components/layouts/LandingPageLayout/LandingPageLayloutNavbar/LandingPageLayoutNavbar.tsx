import { BUTTON_ITEMS } from "../LandingPageLayout.constants";
import { useRouter } from "next/router";
import Image from "next/image";

const LandingPageLayoutNavbar = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-lg">
      <div className="navbar bg-primary text-base-100">
        <div className="flex-1">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <a className="btn btn-ghost text-xl ">CalorieMate</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {BUTTON_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  className="btn btn-sm btn-secondary text-base-100 hover:bg-base-100 hover:text-secondary"
                  onClick={() => {
                    router.push(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayoutNavbar;
