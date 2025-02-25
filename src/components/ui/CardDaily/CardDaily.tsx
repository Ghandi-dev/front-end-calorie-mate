import { IActivity, IFood } from "@/types/DailyLog";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  type?: "food" | "activity";
  data?: IFood[] | IActivity[] | undefined;
  isLoading?: boolean;
}

const CardDaily = (props: PropTypes) => {
  const { type, data, isLoading } = props;

  // Menentukan apakah `data` adalah array `IFood` atau `IActivity`

  return (
    <div className={cn("card shadow-lg w-full h-[200px]", { skeleton: isLoading }, { "bg-base-100": !isLoading })}>
      <div className="flex mx-8 mt-4 justify-between items-center">
        <div className="flex gap-2">
          <div className="card-title capitalize">{type}</div>
          <Image src={`/images/${type}.svg`} alt="logo" width={40} height={40} />
        </div>
        <Link href="/activity-log" className="flex items-center text-primary">
          More..
        </Link>
      </div>
      <div className="card-body overflow-auto pt-2">
        {data ? (
          data?.map((item: IFood | IActivity, index: number) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <p className="text-sm truncate">{item?.name}</p>
              <p className="text-xs text-gray-500 text-right">{item?.calories} cal</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No records found for today.</div>
        )}
      </div>
    </div>
  );
};

export default CardDaily;
