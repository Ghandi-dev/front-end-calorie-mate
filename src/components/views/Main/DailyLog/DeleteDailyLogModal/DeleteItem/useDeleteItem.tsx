import { ToasterContext } from "@/context/ToasterContext";
import dailyLogServices from "@/services/dailyLog.service";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

const useDeleteItem = () => {
  const { setToaster } = useContext(ToasterContext);

  const deleteItem = async (dailyLogId: string, selectedId: string, type: string) => {
    return type === "food"
      ? await dailyLogServices.deleteDailyLogFood(dailyLogId, selectedId)
      : await dailyLogServices.deleteDailyLogActivity(dailyLogId, selectedId);
  };

  const {
    mutate: mutateDeleteItem,
    isPending: isPendingMutateDeleteItem,
    isSuccess: isSuccessMutateDeleteItem,
  } = useMutation({
    mutationFn: ({ dailyLogId, selectedId, type }: { dailyLogId: string; selectedId: string; type: string }) => deleteItem(dailyLogId, selectedId, type),
    onSuccess: () => {
      setToaster({ type: "success", message: "Delete Item successfully" });
    },
    onError: (error) => {
      setToaster({ type: "error", message: error.message });
    },
  });

  const handleDeleteItem = (dailyLogId: string, selectedId: string, type: string) => {
    mutateDeleteItem({ dailyLogId, selectedId, type });
  };

  return {
    handleDeleteItem,
    isPendingMutateDeleteItem,
    isSuccessMutateDeleteItem,
  };
};

export default useDeleteItem;
