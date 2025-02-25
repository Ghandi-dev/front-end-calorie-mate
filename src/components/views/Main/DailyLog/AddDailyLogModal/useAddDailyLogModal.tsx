import { ToasterContext } from "@/context/ToasterContext";
import dailyLogServices from "@/services/dailyLog.service";
import { IDailyLog } from "@/types/DailyLog";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  weight: yup.number().min(1, "Weight must be greater than 0").required(),
  height: yup.number().min(1, "Height must be greater than 0").required(),
  goal: yup.string().required(),
  activityLevel: yup.string().required(),
});

const useAddDailyLogModal = () => {
  const { setToaster } = useContext(ToasterContext);

  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const addDailyLog = async (payload: IDailyLog) => {
    const res = await dailyLogServices.createDailyLog(payload);
    return res;
  };

  const {
    mutate: mutateAddDailyLog,
    isPending: isPendingMutateAddDailyLog,
    isSuccess: isSuccessMutateAddDailyLog,
  } = useMutation({
    mutationFn: addDailyLog,
    onError: (error) => {
      setToaster({ type: "error", message: error.message });
    },
    onSuccess: () => {
      setToaster({ type: "success", message: "Add event successfully" });
      reset();
    },
  });

  const handleAddDailyLog = (data: IDailyLog) => {
    const payload = {
      ...data,
    };

    mutateAddDailyLog(payload);
  };

  return {
    control,
    errors,
    handleSubmitForm,
    handleAddDailyLog,
    reset,
    isPendingMutateAddDailyLog,
    isSuccessMutateAddDailyLog,
  };
};

export default useAddDailyLogModal;
