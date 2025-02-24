import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";

const useDashboard = () => {
  const getDailyLog = async () => {
    const params = `date=${new Date().toISOString().split("T")[0]}`;
    const res = await dailyLogServices.getDailyLogByMember(params);
    const { data } = res;
    return data;
  };

  const { data: dataDailyLog, isLoading: isLoadingDailyLog } = useQuery({
    queryKey: ["dailyLogDashboard"],
    queryFn: getDailyLog,
    // enabled: router.isReady,
  });

  return {
    dataDailyLog,
    isLoadingDailyLog,
  };
};

export default useDashboard;
