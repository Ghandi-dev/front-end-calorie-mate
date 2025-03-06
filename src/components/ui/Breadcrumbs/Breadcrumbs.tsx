import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath
    .split("?")[0] // Hilangkan query string
    .split("/")
    .filter(Boolean); // Pisahkan path dan hilangkan string kosong

  return (
    <div className="text-sm breadcrumbs glass p-4 xl:w-auto rounded-xl">
      <ul>
        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/"); // Buat URL berdasarkan segmen
          return (
            <li key={path}>
              <Link href={path} className={cn({ "pointer-events-none text-primary": index === pathSegments.length - 1 })}>
                <span className="capitalize">{decodeURIComponent(segment)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
