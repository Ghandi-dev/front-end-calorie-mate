import recipeServices from "@/services/recipe.service";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDetailRecipe = () => {
  const router = useRouter();
  const getRecipeById = async (id: string) => {
    const res = await recipeServices.getRecipe(id);
    return res.data.data;
  };
  const { data: dataRecipeDetail, isLoading: isLoadingRecipeDetail } = useQuery({
    queryKey: ["recipe", router.query.id],
    queryFn: () => getRecipeById(router.query.id as string),
    enabled: router.isReady,
  });
  return {
    dataRecipeDetail,
    isLoadingRecipeDetail,
  };
};

export default useDetailRecipe;
