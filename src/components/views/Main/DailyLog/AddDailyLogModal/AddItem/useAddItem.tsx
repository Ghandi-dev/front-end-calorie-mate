import { ToasterContext } from "@/context/ToasterContext";
import dailyLogServices from "@/services/dailyLog.service";
import { IDailyLog } from "@/types/DailyLog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
});

const useAddItem = (id: string) => {
  const { setToaster } = useContext(ToasterContext);

  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const addItem = async (payload: IDailyLog) => {
    const res = await dailyLogServices.updateDailyLog(id, payload);
    return res;
  };

  const {
    mutate: mutateAddItem,
    isPending: isPendingMutateAddItem,
    isSuccess: isSuccessMutateAddItem,
  } = useMutation({
    mutationFn: addItem,
    onError: (error) => {
      setToaster({ type: "error", message: error.message });
    },
    onSuccess: () => {
      setToaster({ type: "success", message: "Add event successfully" });
      reset();
    },
  });

  const handleAddFood = (data: { name: string }) => {
    const payload = {
      food: [
        {
          name: data.name,
        },
      ],
    } as IDailyLog;
    mutateAddItem(payload);
  };

  const handleAddActivity = (data: { name: string }) => {
    const payload = {
      activity: [
        {
          name: data.name,
        },
      ],
    } as IDailyLog;
    mutateAddItem(payload);
  };

  return {
    control,
    handleSubmitForm,
    errors,
    reset,
    mutateAddItem,
    isPendingMutateAddItem,
    isSuccessMutateAddItem,
    handleAddFood,
    handleAddActivity,
  };
};

export default useAddItem;
