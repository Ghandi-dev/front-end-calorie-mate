import { IActivity, IFood } from "@/types/DailyLog";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  type?: "food" | "activity";
  data?: IFood[] | IActivity[];
  isLoading?: boolean;
  isAdd?: boolean;
  handleOpenModalItem?: (type: string) => void;
}

const CardDaily = ({ type = "food", data, isLoading, isAdd = true, handleOpenModalItem }: PropTypes) => {
  return (
    <div className={cn("card shadow-lg w-full max-h-[300px] ", { skeleton: isLoading }, { "bg-base-100": !isLoading })}>
      <div className="flex mx-8 mt-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          <h3 className="card-title capitalize">{type}</h3>
          <Image src={`/images/${type}.svg`} alt={`${type} icon`} width={40} height={40} className="object-contain" />
        </div>
        {!isAdd && (
          <Link href="/activity-log" className="flex items-center text-primary" aria-label={`View more ${type}`}>
            More..
          </Link>
        )}
      </div>
      <div className="card-body overflow-auto pt-2">
        {data?.map((item, index) => (
          <div key={item?._id || index} className="grid grid-cols-2 gap-4">
            <p className="text-sm truncate">{item?.name}</p>
            <p className="text-xs text-gray-500 text-right">{item?.calories} cal</p>
          </div>
        ))}
        {(data?.length ?? 0) < 1 && <div className="text-center text-gray-500">No records found for today.</div>}
      </div>
      {isAdd && data && (
        <div className="card-actions justify-end mx-8 mb-4">
          <button className="btn btn-primary text-base-100" onClick={() => handleOpenModalItem && handleOpenModalItem(type)}>{`Add ${type}`}</button>
        </div>
      )}
    </div>
  );
};

export default CardDaily;
