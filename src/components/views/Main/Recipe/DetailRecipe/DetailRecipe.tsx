import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";
import useDetailRecipe from "./useDetailRecipe";

const DetailRecipe = () => {
  const { dataRecipeDetail, isLoadingRecipeDetail } = useDetailRecipe();
  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="mt-4 gap-4">
        <div className="card glass w-full">
          <div className="card-body p-2 lg:p-8">
            <div className="card bg-base-100">
              <div className="card-body">
                {!isLoadingRecipeDetail ? (
                  <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-6">
                    <div className="text-center lg:text-left">
                      <h1 className="text-2xl font-bold">{dataRecipeDetail?.title}</h1>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        <div className="badge badge-outline">{dataRecipeDetail?.nutrition?.calories} kalori</div>
                        <div className="badge badge-outline">{dataRecipeDetail?.nutrition?.protein} protein</div>
                        <div className="badge badge-outline">{dataRecipeDetail?.nutrition?.carbohydrates} karbohidrat</div>
                        <div className="badge badge-outline">{dataRecipeDetail?.nutrition?.fat} lemak</div>
                      </div>
                    </div>
                    <figure className="w-full relative rounded-md">
                      {dataRecipeDetail?.image && (
                        <Image
                          className="w-full hover:scale-110 transition-transform duration-300 ease-in-out "
                          src={dataRecipeDetail?.image}
                          alt="recipe image"
                          width={500}
                          height={300}
                        />
                      )}
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">{dataRecipeDetail?.portion} Porsi</div>
                    </figure>
                  </div>
                ) : (
                  <div className="h-[300px] skeleton w-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card glass w-full mt-4">
          <div className="card-body p-2 lg:p-8">
            <div className="card bg-base-100">
              <div className="card-body">
                {!isLoadingRecipeDetail ? (
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/2 ">
                      <h1 className="bg-accent mb-2 rounded-md text-accent-content p-2 inline-block font-semibold">Bahan</h1>
                      <div className="flex flex-col gap-2">
                        {dataRecipeDetail?.ingredients?.map((ingredient: IIngredient, index: number) => (
                          <div className="grid grid-cols-[20%_80%] lg:grid-cols-[10%_90%] gap-2 items-center" key={index}>
                            <div className="font-semibold text-right text-2xl text-accent">{ingredient?.quantity}</div>
                            <div className="">{ingredient?.ingredient}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:block w-[2px] h-auto bg-gray-300"></div>
                    <div className="w-full lg:w-1/2 ">
                      <h1 className="bg-accent mb-2 rounded-md text-accent-content p-2 inline-block font-semibold">Cara Membuat</h1>
                      <div className="flex flex-col gap-2">
                        {dataRecipeDetail?.instructions?.map((intruction: IInstruction, index: number) => (
                          <div className="grid grid-cols-[10%_90%] gap-2 items-center" key={index}>
                            <div className="font-semibold text-center text-2xl text-accent">{intruction?.step}</div>
                            <div className="">{intruction?.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[300px] skeleton w-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
