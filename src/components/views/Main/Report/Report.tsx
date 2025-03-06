import Breadcrumbs from "@/components/ui/Breadcrumbs";
import useReport from "./useReport";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Report = () => {
  const t = useTranslations("report");
  const router = useRouter();
  const { dataReport, isLoadingDataReport, refetchDataReport, isRefetchingDataReport } = useReport();
  useEffect(() => {
    refetchDataReport();
  }, [refetchDataReport]);

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className={cn("card flex md:flex-row gap-4 w-full glass mt-4 text-justify p-2 lg:p-6")}>
        <div className="card bg-base-100 w-full md:w-1/4 flex items-center justify-center p-4">
          <Image src="/images/report.svg" alt="report-logo" layout="responsive" width={1} height={1} />
        </div>
        {isLoadingDataReport || isRefetchingDataReport ? (
          <div className="card skeleton w-full h-[364px] md:h-auto"></div>
        ) : (
          <div
            className={cn("card flex bg-base-100 w-full p-4", {
              "text-center items-center justify-center text-gray-400": !dataReport || isLoadingDataReport,
            })}
          >
            {router.locale === "id" ? dataReport?.id || t("no_records") : dataReport?.en || t("no_records")}
          </div>
        )}
      </div>
      <div className="card flex md:flex-row gap-4 w-full glass mt-4 text-justify p-2 lg:p-6">
        <div className="card bg-base-100 w-full flex p-4 gap-4">
          <h1 className="text-center text-2xl font-semibold">{t("glossary")}</h1>
          <div className="grid grid-col-1  items-center gap-2">
            <h1 className="text-start">1. {t("bmr.title")}</h1>
            <p>{t("bmr.description")}</p>
          </div>
          <div className="grid grid-col-1  items-center gap-2">
            <h1 className="text-start">2. {t("tdee.title")}</h1>
            <p>{t("tdee.description")}</p>
          </div>
          <div className="grid grid-col-1  items-center gap-2">
            <h1 className="text-start">3. {t("bmi.title")}</h1>
            <p>{t("bmi.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
