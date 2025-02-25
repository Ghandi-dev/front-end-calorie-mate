import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";

const useDailyLog = () => {
  const getDailyLog = async () => {
    const params = `date=${new Date().toISOString().split("T")[0]}`;
    const res = await dailyLogServices.getDailyLogByMember(params);
    const { data } = res;
    return data;
  };

  const {
    data: dataDailyLog,
    isLoading: isLoadingDailyLog,
    refetch: refecthDailyLog,
  } = useQuery({
    queryKey: ["dailyLog"],
    queryFn: getDailyLog,
    // enabled: router.isReady,
  });

  return {
    dataDailyLog,
    isLoadingDailyLog,
    refecthDailyLog,
  };
};

export default useDailyLog;
