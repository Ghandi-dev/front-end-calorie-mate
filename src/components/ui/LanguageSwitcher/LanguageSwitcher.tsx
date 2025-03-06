import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale: currentLocale } = router;

  const languages = [
    {
      code: "id",
      name: "Indonesia",
      flag: "/images/flags/id.svg", // path ke ikon bendera Indonesia
    },
    {
      code: "en",
      name: "English",
      flag: "/images/flags/gb.svg", // path ke ikon bendera Inggris/UK
    },
  ];

  // Cari bahasa yang sedang aktif
  const activeLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <details className="dropdown dropdown-end w-full ">
      <summary className="btn btn-ghost m-1 lg:w-full p-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 relative overflow-hidden rounded-sm">
            <Image src={activeLanguage.flag} alt={activeLanguage.name} layout="fill" objectFit="cover" />
          </div>
          <h1 className="hidden lg:block">{activeLanguage.name}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </summary>
      <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow-sm bg-base-100 rounded-box w-50">
        {languages.map((lang) => (
          <li key={lang.code}>
            <Link href={{ pathname, query }} as={asPath} locale={lang.code} className={currentLocale === lang.code ? "active" : "text-content"}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 relative overflow-hidden rounded-sm">
                  <Image src={lang.flag} alt={lang.name} layout="fill" objectFit="cover" />
                </div>
                <span className="text-base-content">{lang.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
