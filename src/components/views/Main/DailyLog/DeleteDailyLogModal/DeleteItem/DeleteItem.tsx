import { cn } from "@/utils/cn";
import useDeleteItem from "./useDeleteItem";
import { useEffect } from "react";
import Image from "next/image";

interface PropTypes {
  dailyLogId: string;
  selectedId: string;
  isModalItemOpen: boolean;
  handleCloseModal: () => void;
  refecthDailyLog: () => void;
  type: string;
}

const DeleteItem = (props: PropTypes) => {
  const { dailyLogId, selectedId, isModalItemOpen, handleCloseModal, refecthDailyLog, type } = props;
  const { handleDeleteItem, isPendingMutateDeleteItem, isSuccessMutateDeleteItem } = useDeleteItem();

  useEffect(() => {
    if (isSuccessMutateDeleteItem) {
      handleCloseModal();
      refecthDailyLog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessMutateDeleteItem]);

  if (!isModalItemOpen) return null;
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl text-neutral text-center font-bold capitalize">Delete {type}</h1>
          <Image src="/images/warning.svg" alt="logo" width={100} height={100} />
          <p className="text-gray-500 text-center">Are you sure you want to delete this {type}?</p>
        </div>
        <div className="modal-action flex">
          <button type="button" className={cn("btn", { "btn-disabled hover:bg-none": isPendingMutateDeleteItem })} onClick={handleCloseModal}>
            Close
          </button>
          <button
            type="button"
            className={cn("btn btn-error text-base-100 ", { "btn-disabled hover:bg-none": isPendingMutateDeleteItem })}
            onClick={() => handleDeleteItem(dailyLogId, selectedId, type)}
          >
            {isPendingMutateDeleteItem ? <div className="loading loading-infinity loading-lg"></div> : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
