import Breadcrumbs from "@/components/ui/Breadcrumbs";
import greeting from "@/utils/greeting";
import useDashboard from "./useDashboard";
import CardDaily from "@/components/ui/CardDaily";
import useSidebarLayout from "@/components/layouts/MainLayout/SidebarLayout/useSidebarLayout";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Dashboard = () => {
  const t = useTranslations("dashboard");
  const router = useRouter();
  const { dataDailyLog, isLoadingDailyLog } = useDashboard();
  const { dataProfile } = useSidebarLayout();

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row mt-4 gap-4">
        <div className="card glass w-full lg:w-1/2">
          <div className="card-body">
            <h1 className="card-title text-2xl text-neutral">{dataProfile && greeting(dataProfile?.fullname, router.locale ?? "en")}</h1>
            <p className="text-sm">{t("description")}</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <CardDaily isAdd={false} type="food" data={dataDailyLog?.data[0]?.food} isLoading={isLoadingDailyLog} />
              <CardDaily isAdd={false} type="activity" data={dataDailyLog?.data[0]?.activity} isLoading={isLoadingDailyLog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
