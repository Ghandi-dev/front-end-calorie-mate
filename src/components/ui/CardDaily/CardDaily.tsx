import { IActivity, IFood } from "@/types/DailyLog";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { CiTrash } from "react-icons/ci";

interface PropTypes {
  type?: "food" | "activity";
  data?: IFood[] | IActivity[];
  isLoading?: boolean;
  isAdd?: boolean;
  handleOpenModalItem?: (type: string) => void;
  handleOpenDeleteModalItem?: (id: string) => void;
  setSelectedId?: (id: string) => void;
}

const CardDaily = (props: PropTypes) => {
  const t = useTranslations("dashboard");
  const { type = "food", data, isLoading, isAdd = true, handleOpenModalItem, handleOpenDeleteModalItem, setSelectedId } = props;
  return (
    <Fragment>
      {!isLoading ? (
        <div className={cn("card shadow-lg w-full h-[365px] bg-base-100")}>
          <div className="flex mx-8 mt-4 justify-between items-center">
            <div className="flex gap-2 items-center">
              <h3 className="card-title capitalize">{t(type)}</h3>
              <Image src={`/images/${type}.svg`} alt={`${type} icon`} width={40} height={40} className="object-contain" />
            </div>
            {!isAdd && (
              <Link href="/main/daily-log" className="flex items-center text-primary" aria-label={`View more ${type}`}>
                {t("more")}
              </Link>
            )}
          </div>
          <div className={cn("card-body overflow-auto pt-2 ", { "flex items-center justify-center": (data?.length ?? 0) < 1 })}>
            {data?.map((item, index) => (
              <div key={item?._id || index} className="grid grid-cols-2 gap-4 items-center">
                <p className="text-sm truncate">{item?.name}</p>
                <div className="flex gap-1 items-center">
                  <p className="text-xs text-gray-500 text-right">{item?.calories} cal</p>
                  {isAdd && handleOpenDeleteModalItem && setSelectedId && (
                    <button
                      className="btn btn-sm btn-circle"
                      onClick={() => {
                        handleOpenDeleteModalItem(type);
                        setSelectedId(item?._id || "");
                      }}
                    >
                      <CiTrash />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {(data?.length ?? 0) < 1 && <div className="text-center text-gray-400">{t("notFound")}</div>}
          </div>
          {isAdd && data && (
            <div className="card-actions justify-end mx-8 mb-4">
              <button className="btn btn-primary text-base-100" onClick={() => handleOpenModalItem && handleOpenModalItem(type)}>
                {t("add")} {t(type)}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={cn("card shadow-lg w-full h-[365px] skeleton")}></div>
      )}
    </Fragment>
  );
};

export default CardDaily;
