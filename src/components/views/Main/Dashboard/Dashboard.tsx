import Breadcrumbs from "@/components/ui/Breadcrumbs";
import greeting from "@/utils/greeting";
import useDashboard from "./useDashboard";
import CardDaily from "@/components/ui/CardDaily";
import useSidebarLayout from "@/components/layouts/MainLayout/SidebarLayout/useSidebarLayout";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import ChartDaily from "@/components/ui/ChartDaily";
import { IDailyLog } from "@/types/DailyLog";
import { formatDate } from "@/utils/date";

const Dashboard = () => {
  const t = useTranslations("dashboard");
  const router = useRouter();
  const { dataDailyLogToday, isLoadingDailyLogToday, dataDailyLog } = useDashboard();
  const { dataProfile } = useSidebarLayout();

  // Format data agar sesuai dengan struktur yang diharapkan oleh ChartDaily
  const formattedData =
    dataDailyLog?.data?.map((log: IDailyLog) => ({
      date: formatDate(log.date as string), // Pastikan format tanggal sesuai
      weight: log.weight ?? 0,
      totalCaloriesIn: log.totalCaloriesIn ?? 0,
      totalCaloriesOut: log.totalCaloriesOut ?? 0,
    })) ?? [];

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="flex flex-col 2xl:flex-row mt-4 gap-4">
        <div className="card glass w-full xl:w-1/2">
          <div className="card-body p-2 lg:p-8">
            <h1 className="card-title text-2xl text-neutral">{dataProfile && greeting(dataProfile?.fullname, router.locale ?? "en")}</h1>
            <p className="text-sm">{t("description")}</p>
            <ChartDaily data={formattedData} />
          </div>
        </div>
        <div className="card glass w-full 2xl:w-1/2">
          <div className="card-body p-2 lg:p-8">
            <h1 className="card-title text-2xl text-neutral">{dataProfile && greeting(dataProfile?.fullname, router.locale ?? "en")}</h1>
            <p className="text-sm">{t("description")}</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <CardDaily isAdd={false} type="food" data={dataDailyLogToday?.data[0]?.food} isLoading={isLoadingDailyLogToday} />
              <CardDaily isAdd={false} type="activity" data={dataDailyLogToday?.data[0]?.activity} isLoading={isLoadingDailyLogToday} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
