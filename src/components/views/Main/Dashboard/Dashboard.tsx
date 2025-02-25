import Breadcrumbs from "@/components/ui/Breadcrumbs";
import greeting from "@/utils/greeting";
import useDashboard from "./useDashboard";
import CardDaily from "@/components/ui/CardDaily";
import useSidebarLayout from "@/components/layouts/MainLayout/SidebarLayout/useSidebarLayout";

const Dashboard = () => {
  const { dataDailyLog, isLoadingDailyLog } = useDashboard();
  const { dataProfile } = useSidebarLayout();

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row mt-4 gap-4">
        <div className="card glass w-full lg:w-1/2  ">
          <div className="card-body">
            <h1 className="card-title text-2xl text-neutral">{dataProfile && greeting(dataProfile?.fullname)}</h1>
            <p className="text-sm">Here you can monitor your daily calorie intake and activities effortlessly, so you can stay fit and healthy every day.</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              {!isLoadingDailyLog && dataDailyLog ? (
                <>
                  <CardDaily type="food" data={dataDailyLog?.data[0]?.food} />
                  <CardDaily type="activity" data={dataDailyLog?.data[0]?.activity} />
                </>
              ) : (
                <>
                  <CardDaily isLoading={isLoadingDailyLog} type="food" />
                  <CardDaily isLoading={isLoadingDailyLog} type="activity" />
                </>
              )}
            </div>
            <div className="stats stats-vertical md:stats-horizontal shadow bg-base-100 mt-4">
              <div className="stat text-center lg:text-left">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>
              <div className="stat text-center lg:text-left">
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>
              <div className="stat text-center lg:text-left">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
