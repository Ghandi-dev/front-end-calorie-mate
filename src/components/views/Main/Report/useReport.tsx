import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useReport = () => {
  const router = useRouter();
  const getReport = async () => {
    const res = await dailyLogServices.getDailyLogReport(`language=${router.locale}`);
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
