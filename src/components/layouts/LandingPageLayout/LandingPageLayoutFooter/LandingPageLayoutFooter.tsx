import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SOCIAL_ITEMS } from "../LandingPageLayout.constants";

const LandingPageLayoutFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-900 px-6 py-10 text-center lg:flex-row lg:text-left xl:p-20">
      <Image
        src={"/images/general/logo.svg"}
        className="mb-4 w-40 lg:mb-0 lg:w-60"
        width={200}
        height={100}
        alt={"logo"}
      />
      {/* Customer Service */}
      <div className="mb-4 flex flex-col gap-4 lg:mb-0">
        <div>
          <h4 className="text-xl text-white">Customer Service</h4>
          <p className="text-gray-400">
            <Link href="mailto:sonnyaghandi@gmail.com">
              sonnyaghandi@gmail.com
            </Link>
            &nbsp; | &nbsp;<Link href="tel:08123456789">08123456789</Link>
          </p>
        </div>
        <div>
          <h4 className="text-xl text-white">Office</h4>
          <p className="text-gray-400">
            jl. Jendral Sudirman No. 123, Jakarta Selatan, Indonesia
          </p>
        </div>
      </div>
      {/* Menu */}
      <div className="mb-10 flex flex-col gap-2 lg:mb-0">
        <h2 className="text-xl font-bold text-white lg:mb-2 xl:mb-2">Menu</h2>
        {NAV_ITEMS.map((item, index) => (
          <Link
            key={`footer-nav-${item.label}-${index}`}
            href={item.href}
            className="cursor-pointer text-gray-600 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {/* Social */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-between gap-8 text-gray-600">
          {SOCIAL_ITEMS.map((item, index) => (
            <Link
              key={`footer-social-${item.label}-${index}`}
              href={item.href}
              className="cursor-pointer text-3xl hover:text-white"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="w-full text-center text-gray-600">
          Copy right &copy; 2025 Acara. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default LandingPageLayoutFooter;
