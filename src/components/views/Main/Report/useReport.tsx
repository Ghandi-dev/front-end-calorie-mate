import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";

const useReport = () => {
  const getReport = async () => {
    const res = await dailyLogServices.getDailyLogReport();
    return res.data.data;
  };

  const { data: dataReport, isLoading: isLoadingDataReport } = useQuery({
    queryKey: ["Report"],
    queryFn: getReport,
    // enabled: router.isReady,
  });

  return {
    dataReport,
    isLoadingDataReport,
  };
};
export default useReport;
