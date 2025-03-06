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
        {pathSegments
          .filter((_, index) => index !== 2) // Sembunyikan path ke-3
          .map((segment, index, filteredSegments) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLastSegment = index === filteredSegments.length - 1; // Cek apakah ini segment terakhir

            return (
              <li key={path}>
                <Link
                  href={path}
                  className={cn({
                    "pointer-events-none text-primary": (isLastSegment && pathSegments.length !== 3) || (index === 1 && pathSegments.length === 3), // Segment ke-2 akan berwarna primary jika totalnya 3
                  })}
                >
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
