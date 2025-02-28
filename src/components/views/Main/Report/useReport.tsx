import dailyLogServices from "@/services/dailyLog.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useReport = () => {
  const router = useRouter();
  const getReport = async () => {
    const res = await dailyLogServices.getDailyLogReport(`language=${router.locale}`);
    return res.data.data;
  };

  const {
    data: dataReport,
    isLoading: isLoadingDataReport,
    refetch: refetchDataReport,
    isRefetching: isRefetchingDataReport,
  } = useQuery({
    queryKey: ["Report", router.asPath],
    queryFn: getReport,
    refetchOnWindowFocus: true,
    staleTime: 0, // 30 detik
  });

  return {
    dataReport,
    isLoadingDataReport,
    refetchDataReport,
    isRefetchingDataReport,
  };
};
export default useReport;
