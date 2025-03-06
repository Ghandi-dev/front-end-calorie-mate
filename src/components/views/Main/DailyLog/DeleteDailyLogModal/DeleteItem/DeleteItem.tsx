import { cn } from "@/utils/cn";
import useDeleteItem from "./useDeleteItem";
import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface PropTypes {
  dailyLogId: string;
  selectedId: string;
  isModalItemOpen: boolean;
  handleCloseModal: () => void;
  refecthDailyLog: () => void;
  type: string;
}

const DeleteItem = (props: PropTypes) => {
  const t = useTranslations("form");
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
          <h1 className="text-xl text-content text-center font-bold capitalize">
            {t("delete")} {t(type)}
          </h1>
          <Image src="/images/warning.svg" alt="logo" width={100} height={100} />
          <p className="text-gray-500 text-center">{t("confirmDelete", { type: t(type) })}</p>
        </div>
        <div className="modal-action flex">
          <button type="button" className={cn("btn", { "btn-disabled hover:bg-none": isPendingMutateDeleteItem })} onClick={handleCloseModal}>
            {t("close")}
          </button>
          <button
            type="button"
            className={cn("btn btn-error text-base-100 ", { "btn-disabled hover:bg-none": isPendingMutateDeleteItem })}
            onClick={() => handleDeleteItem(dailyLogId, selectedId, type)}
          >
            {isPendingMutateDeleteItem ? <div className="loading loading-infinity loading-lg"></div> : t("delete")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
