import { IDailyLog } from "@/types/DailyLog";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Fragment } from "react";

interface PropTypes {
  data: IDailyLog;
  openModal: () => void;
  isLoading: boolean;
}

const DataPersonalCard = (props: PropTypes) => {
  const { data, isLoading, openModal } = props;
  return (
    <div className={cn("card min-h-[178px]", { skeleton: isLoading }, { "bg-base-100": !isLoading })}>
      <div className="p-6 flex flex-col w-full">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-neutral">Your Data</h3>
          {!data && (
            <div className="flex justify-end">
              <label htmlFor="my_modal_6" className="btn btn-primary text-base-100" onClick={openModal}>
                Create Daily
              </label>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4 w-full mt-4 items-center justify-center">
          {data ? (
            <Fragment>
              <div className="w-2/4 lg:w-full flex flex-col items-center justify-between gap-2">
                <Image src="/images/weight.svg" alt="food" width={50} height={50} />
                <h1 className="font-semibold text-sm lg:text-lg text-neutral text-center">{data?.weight} kg</h1>
              </div>
              <div className="w-2/4 lg:w-full flex flex-col items-center justify-between gap-2">
                <Image src="/images/height.svg" alt="food" width={50} height={50} />
                <h1 className="font-semibold text-sm lg:text-lg text-neutral text-center">{data?.height} cm</h1>
              </div>
              <div className="w-2/4 lg:w-full flex flex-col items-center justify-between gap-2">
                <Image src="/images/notes.svg" alt="food" width={50} height={50} />
                <h1 className="font-semibold text-sm lg:text-lg text-neutral text-center">bmr {data?.bmr}</h1>
              </div>
              <div className="w-2/4 lg:w-full flex flex-col items-center justify-between gap-2">
                <Image src="/images/notes.svg" alt="food" width={50} height={50} />
                <h1 className="font-semibold text-sm lg:text-lg text-neutral text-center">tdee {data?.tdee}</h1>
              </div>
            </Fragment>
          ) : (
            <h1 className="text-center text-gray-400">No records found for today</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataPersonalCard;
