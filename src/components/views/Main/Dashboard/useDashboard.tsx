import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDashboard = () => {
  const router = useRouter();

  const getDailyLog = async () => {
    const params = `date=${new Date().toISOString().split("T")[0]}`;
    const res = await dailyLogServices.getDailyLogByMember(params);
    const { data } = res;
    return data;
  };

  const { data: dataDailyLog, isLoading: isLoadingDailyLog } = useQuery({
    queryKey: ["dailyLog"],
    queryFn: getDailyLog,
    enabled: router.isReady,
  });

  return {
    dataDailyLog,
    isLoadingDailyLog,
  };
};

export default useDashboard;
