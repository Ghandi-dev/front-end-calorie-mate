import authServices from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";

const useSidebarLayout = () => {
  const getProfile = async () => {
    const { data } = await authServices.getProfile();
    return data.data;
  };

  const {
    data: dataProfile,
    isLoading: isLoadingProfile,
    refetch: refetchProfile,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    // enabled: router.isReady,
  });

  return {
    dataProfile,
    refetchProfile,
    isLoadingProfile,
  };
};

export default useSidebarLayout;
