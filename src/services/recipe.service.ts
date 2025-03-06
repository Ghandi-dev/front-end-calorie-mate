import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";

const recipeServices = {
  getRecipes: (params?: string) => instance.get(`${endpoint.RECIPE}?${params}`),
  getRecipe: (id: string) => instance.get(`${endpoint.RECIPE}/${id}`),
};

export default recipeServices;
