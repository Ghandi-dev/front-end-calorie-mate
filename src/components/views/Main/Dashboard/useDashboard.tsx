import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";

const useDashboard = () => {
  const getDailyLogToday = async () => {
    const params = `date=${new Date().toISOString().split("T")[0]}`;
    const res = await dailyLogServices.getDailyLogByMember(params);
    const { data } = res;
    return data;
  };

  const getAllDalyLog = async () => {
    const params = `limit=7`;
    const res = await dailyLogServices.getDailyLogByMember(params);
    const { data } = res;
    return data;
  };

  const { data: dataDailyLogToday, isLoading: isLoadingDailyLogToday } = useQuery({
    queryKey: ["dailyLogDashboardToday"],
    queryFn: getDailyLogToday,
    // enabled: router.isReady,
  });

  const { data: dataDailyLog, isLoading: isLoadingDailyLog } = useQuery({
    queryKey: ["dailyLogDashboard"],
    queryFn: getAllDalyLog,
    // enabled: router.isReady,
  });

  return {
    dataDailyLogToday,
    isLoadingDailyLogToday,
    dataDailyLog,
    isLoadingDailyLog,
  };
};

export default useDashboard;
