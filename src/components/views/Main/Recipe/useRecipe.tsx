import useChangeUrl from "@/hooks/useChangeUrl";
import recipeServices from "@/services/recipe.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useRecipe = () => {
  const router = useRouter();
  const { currentLimit, currentPage, currentSearch } = useChangeUrl();

  const getRecipes = async () => {
    let params = `limit=${currentLimit}&page=${currentPage}`;
    if (currentSearch) params += `&search=${currentSearch}`;
    const result = await recipeServices.getRecipes(params);
    return result.data;
  };

  const {
    data: dataRecipe,
    isLoading: isLoadingRecipe,
    refetch: refetchRecipe,
    isRefetching: isRefetchingRecipe,
  } = useQuery({
    queryKey: ["recipe", currentLimit, currentPage, currentSearch],
    queryFn: () => getRecipes(),
    enabled: router.isReady && !!currentLimit && !!currentPage,
  });

  return { dataRecipe, isLoadingRecipe, refetchRecipe, isRefetchingRecipe };
};

export default useRecipe;
