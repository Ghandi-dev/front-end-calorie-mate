import { DELAY, LIMIT_EVENT, PAGE_DEFAULT } from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import authServices from "@/services/auth.service";
import eventServices from "@/services/event.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

const useLandingPageLayoutNavbar = () => {
  const router = useRouter();
  const debounce = useDebounce();
  const [search, setSearch] = useState<string>("");
  const getProfile = async () => {
    const { data } = await authServices.getProfile();
    return data.data;
  };
  const { data: dataProfile, refetch: refetchProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    enabled: router.isReady,
  });

  const getEventsSearch = async (params: string) => {
    const res = await eventServices.getEvents(params);
    const { data } = res;
    return data;
  };

  const {
    data: dataEventSearch,
    isLoading: isLoadingEventSearch,
    isRefetching: isRefetchingEventSearch,
  } = useQuery({
    queryKey: ["EventSearch", search],
    queryFn: () =>
      getEventsSearch(
        `search=${search}&limit=${LIMIT_EVENT}&page=${PAGE_DEFAULT}&isPublish=true`,
      ),
    enabled: !!search,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(() => setSearch(e.target.value), DELAY);
  };

  return {
    dataProfile,
    refetchProfile,

    search,
    setSearch,
    handleSearch,
    dataEventSearch,
    isLoadingEventSearch,
    isRefetchingEventSearch,
  };
};

export default useLandingPageLayoutNavbar;
