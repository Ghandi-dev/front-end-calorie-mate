import { Fragment, useEffect } from "react";
import useAddItem from "./useAddItem";
import { cn } from "@/utils/cn";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

interface PropTypes {
  id: string;
  isModalItemOpen: boolean;
  handleCloseModal: () => void;
  refecthDailyLog: () => void;
  type: string;
}

const AddItem = (props: PropTypes) => {
  const t = useTranslations("form");
  const { isModalItemOpen, handleCloseModal, refecthDailyLog, type, id } = props;
  const { control, handleSubmitForm, errors, isPendingMutateAddItem, isSuccessMutateAddItem, handleAddFood, handleAddActivity, reset } = useAddItem(id);
  const disabledSubmit = isPendingMutateAddItem || isPendingMutateAddItem;

  useEffect(() => {}, [isModalItemOpen]);

  useEffect(() => {
    if (isSuccessMutateAddItem) {
      handleCloseModal();
      refecthDailyLog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessMutateAddItem]);

  useEffect(() => {
    if (!isModalItemOpen) {
      reset();
    }
  }, [isModalItemOpen, reset]);

  if (!isModalItemOpen) return null; // Modal hanya dirender saat dibuka
  return (
    <Fragment>
      <div className="modal modal-open">
        <div className="modal-box">
          <h1 className="text-xl text-content text-center font-bold capitalize">{t(type)}</h1>
          <form
            className={cn("flex flex-col mt-4", Object.keys(errors).length > 0 ? "gap-1" : "gap-4")}
            onSubmit={handleSubmitForm(type === "food" ? handleAddFood : handleAddActivity)}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("name")}</span>
                  </label>
                  <input {...field} type="text" className="input input-bordered w-full" />
                  {errors.name && <p className="text-error">{errors.name.message}</p>}
                </div>
              )}
            />
            <Controller
              name="calories"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("calories")}</span>
                  </label>
                  <input {...field} type="text" className="input input-bordered w-full" />
                  {errors.calories && <p className="text-error">{errors.calories.message}</p>}
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
                onClick={handleSubmitForm(type === "food" ? handleAddFood : handleAddActivity)}
              >
                {isPendingMutateAddItem ? <div className="loading loading-infinity loading-lg"></div> : t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddItem;
