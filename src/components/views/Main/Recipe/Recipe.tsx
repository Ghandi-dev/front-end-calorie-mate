import CardRecipe from "@/components/ui/CardRecipe";
import useRecipe from "./useRecipe";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import useChangeUrl from "@/hooks/useChangeUrl";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { LIMIT_LIST } from "@/constants/list.constants";
import { cn } from "@/utils/cn";

const Recipe = () => {
  const { isReady } = useRouter();
  const { setUrlExplore } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrlExplore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  const { currentLimit, currentPage, handleChangeLimit, handleChangePage, handleChangeSearch } = useChangeUrl();
  const { dataRecipe, isLoadingRecipe } = useRecipe();

  const BottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-between ">
        <select defaultValue="Pick a color" className="select w-auto" onChange={handleChangeLimit} value={currentLimit}>
          {LIMIT_LIST.map((limit) => (
            <option key={limit.value} value={limit.value}>
              {limit.label}
            </option>
          ))}
        </select>
        <div>
          Page {currentPage} of {dataRecipe?.pagination?.totalPages}
        </div>
        {dataRecipe?.pagination?.totalPages > 1 && (
          <div className="join">
            <button
              className={cn("join-item btn bg-base-100", { "btn-disabled": Number(currentPage) === 1 })}
              onClick={() => handleChangePage(Number(currentPage) - 1)}
            >
              «
            </button>
            <button className="join-item btn">{currentPage}</button>
            <button
              className={cn("join-item btn bg-base-100", { "btn-disabled": Number(currentPage) === dataRecipe?.pagination?.totalPages })}
              onClick={() => handleChangePage(Number(currentPage) + 1)}
            >
              »
            </button>
          </div>
        )}
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLimit, currentPage, handleChangeLimit, handleChangePage]);

  return (
    <div className="w-full p-4 lg:p-10 mb-16 lg:mb-0">
      <Breadcrumbs />
      <div className="mt-4 gap-4">
        <div className="card glass w-full ">
          <div className="card-body p-2 lg:p-8 ">
            <div className="flex items-center justify-end">
              <input type="text" placeholder="Search Recipe" className="input input-bordered w-full md:max-w-xs" onChange={handleChangeSearch} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:flex-row w-full gap-4 mt-2">
              {!isLoadingRecipe ? (
                dataRecipe?.data.length > 0 ? (
                  dataRecipe.data.map((recipe: IRecipe) => <CardRecipe key={recipe._id} dataRecipe={recipe} />)
                ) : (
                  <div className="text-center text-gray-500 col-span-2">Data tidak ditemukan</div>
                )
              ) : (
                Array.from({ length: 4 }).map((_, i) => <div className="card w-full skeleton h-[410px]" key={i}></div>)
              )}
            </div>
            <div>{!isLoadingRecipe ? BottomContent : <div className="skeleton w-full h-10"></div>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
