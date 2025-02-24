import Image from "next/image";
import Link from "next/link";
import { SOCIAL_ITEMS } from "../LandingPageLayout.constants";

const LandingPageLayoutFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-900 px-6 py-10 text-center lg:flex-row lg:text-left xl:p-20">
      <Image src={"/images/logo.png"} className="mb-4 w-40 lg:mb-0 lg:w-60" width={200} height={100} alt={"logo"} />
      {/* Customer Service */}
      <div className="mb-4 flex flex-col gap-4 lg:mb-0">
        <div>
          <h4 className="text-xl text-white">Created with ❤️ by</h4>
          <p className="text-gray-400">Arum Rahmah Romadhoni</p>
        </div>
      </div>
      {/* Social */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center justify-between gap-8 text-gray-600">
          {SOCIAL_ITEMS.map((item, index) => (
            <Link key={`footer-social-${item.label}-${index}`} href={item.href} className="cursor-pointer text-3xl hover:text-white">
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="w-full text-center text-gray-600">Copy right &copy; {new Date().getFullYear()} CalorieMate. All Right Reserved</p>
      </div>
    </div>
  );
};

export default LandingPageLayoutFooter;
