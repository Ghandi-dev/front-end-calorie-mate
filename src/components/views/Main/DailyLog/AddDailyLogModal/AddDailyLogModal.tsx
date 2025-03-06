import { Fragment, useEffect } from "react";
import { Controller } from "react-hook-form";
import useAddDailyLogModal from "./useAddDailyLogModal";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

interface PropTypes {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  refecthDailyLog: () => void;
}

const AddDailyLogModal = (props: PropTypes) => {
  const t = useTranslations("dailyLog");
  const { isModalOpen, handleCloseModal, refecthDailyLog } = props;
  const { control, errors, handleSubmitForm, handleAddDailyLog, reset, isPendingMutateAddDailyLog, isSuccessMutateAddDailyLog } = useAddDailyLogModal();

  const disabledSubmit = isPendingMutateAddDailyLog || isPendingMutateAddDailyLog;

  useEffect(() => {
    if (isSuccessMutateAddDailyLog) {
      handleCloseModal();
      refecthDailyLog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessMutateAddDailyLog]);

  useEffect(() => {
    if (!isModalOpen) {
      reset();
    }
  }, [isModalOpen, reset]);

  if (!isModalOpen) return null; // Modal hanya dirender saat dibuka

  return (
    <Fragment>
      <div className="modal modal-open">
        <div className="modal-box">
          <h1 className="text-xl text-content text-center font-bold">{t("title form daily")}</h1>
          <form className={cn("flex flex-col mt-4", Object.keys(errors).length > 0 ? "gap-1" : "gap-4")} onSubmit={handleSubmitForm(handleAddDailyLog)}>
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("weight")}</span>
                  </label>
                  <input {...field} type="text" className="input input-bordered w-full" />
                  {errors.weight && <p className="text-error">{errors.weight.message}</p>}
                </div>
              )}
            />
            <Controller
              name="height"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("height")}</span>
                  </label>
                  <input {...field} type="text" className="input input-bordered w-full" />
                  {errors.height && <p className="text-error">{errors.height.message}</p>}
                </div>
              )}
            />
            <Controller
              name="goal"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("goal")}</span>
                  </label>
                  <select {...field} className="select select-bordered w-full">
                    <option value={""} disabled selected>
                      {t("select goal")}
                    </option>
                    <option value={"lose"}>{t("lose")}</option>
                    <option value={"maintain"}>{t("maintain")}</option>
                    <option value={"gain"}>{t("gain")}</option>
                  </select>
                  {errors.goal && <p className="text-error">{errors.goal.message}</p>}
                </div>
              )}
            />
            <Controller
              name="activityLevel"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("activity level")}</span>
                  </label>
                  <select {...field} className="select select-bordered w-full">
                    <option value={""} disabled selected>
                      {t("select activity")}
                    </option>
                    <option value={"sedentary"}>{t("sedentary")}</option>
                    <option value={"lightly active"}>{t("lightly")}</option>
                    <option value={"moderately active"}>{t("moderately")}</option>
                    <option value={"very active"}>{t("very")}</option>
                    <option value={"super active"}>{t("super")}</option>
                  </select>
                  {errors.activityLevel && <p className="text-error">{errors.activityLevel.message}</p>}
                </div>
              )}
            />
            <div className="modal-action flex">
              <button type="button" className={cn("btn", { "btn-disabled": disabledSubmit })} onClick={handleCloseModal}>
                {t("close")}
              </button>
              <button
                type="button"
                className={cn("btn btn-primary text-base-100", { "btn-disabled": disabledSubmit })}
                onClick={handleSubmitForm(handleAddDailyLog)}
              >
                {isPendingMutateAddDailyLog ? <div className="loading loading-infinity loading-lg"></div> : t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddDailyLogModal;
