import { DELAY, LIMIT_DEFAULT, PAGE_DEFAULT } from "@/constants/list.constants";
import { useRouter } from "next/router";
import useDebounce from "./useDebounce";
import { useEffect } from "react";

const useChangeUrl = () => {
  const router = useRouter();
  const debounce = useDebounce();

  const currentLimit = router.query.limit;
  const currentPage = router.query.page;
  const currentSearch = router.query.search;
  const currentCategory = router.query.category;
  const currentIsOnline = router.query.isOnline;
  const currentIsFeatured = router.query.isFeatured;

  const setUrl = () => {
    router.replace({
      query: {
        limit: currentLimit || LIMIT_DEFAULT,
        page: currentPage || PAGE_DEFAULT,
        search: currentSearch || "",
      },
    });
  };

  const setUrlExplore = () => {
    router.replace({
      query: {
        limit: currentLimit || LIMIT_DEFAULT,
        page: currentPage || PAGE_DEFAULT,
        category: currentCategory || "",
        isOnline: currentIsOnline || "",
        isFeatured: currentIsFeatured || "",
      },
    });
  };

  const handleChangePage = (page: number) => {
    router.push({
      query: { ...router.query, page },
    });
  };

  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    debounce(() => {
      const search = e.target.value;
      router.push({
        query: { ...router.query, limit: search, page: PAGE_DEFAULT },
      });
    }, DELAY);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    router.push({
      query: { ...router.query, search, page: PAGE_DEFAULT },
    });
  };

  const handleClearSearch = () => {
    router.push({
      query: { ...router.query, search: "", page: PAGE_DEFAULT },
    });
  };

  const handleChangeCategory = (category: string) => {
    router.push({
      query: { ...router.query, category, page: PAGE_DEFAULT },
    });
  };

  const handleChangeIsOnline = (isOnline: string) => {
    router.push({
      query: { ...router.query, isOnline, page: PAGE_DEFAULT },
    });
  };

  const handleChangeIsFeatured = (isFeatured: string) => {
    router.push({
      query: { ...router.query, isFeatured, page: PAGE_DEFAULT },
    });
  };

  return {
    currentLimit,
    currentPage,
    currentSearch,
    currentCategory,
    currentIsOnline,
    currentIsFeatured,
    setUrl,
    setUrlExplore,
    handleChangePage,
    handleChangeLimit,
    handleChangeSearch,
    handleClearSearch,
    handleChangeCategory,
    handleChangeIsOnline,
    handleChangeIsFeatured,
  };
};

export default useChangeUrl;
