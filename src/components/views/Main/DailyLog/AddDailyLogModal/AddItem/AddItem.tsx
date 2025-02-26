import { Fragment, useEffect } from "react";
import useAddItem from "./useAddItem";
import { cn } from "@/utils/cn";
import { Controller } from "react-hook-form";

interface PropTypes {
  id: string;
  isModalItemOpen: boolean;
  handleCloseModal: () => void;
  refecthDailyLog: () => void;
  type: string;
}

const AddItem = (props: PropTypes) => {
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
          <h1 className="text-xl text-neutral text-center font-bold capitalize">{type} Form</h1>
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
                    <span className="label-text">Name</span>
                  </label>
                  <input {...field} type="text" placeholder="Enter name" className="input input-bordered w-full" />
                  {errors.name && <p className="text-error">{errors.name.message}</p>}
                </div>
              )}
            />

            <div className="modal-action flex">
              <button type="button" className={cn("btn", { "btn-disabled": disabledSubmit })} onClick={handleCloseModal}>
                Close
              </button>
              <button
                type="button"
                className={cn("btn btn-primary text-base-100", { "btn-disabled": disabledSubmit })}
                onClick={handleSubmitForm(type === "food" ? handleAddFood : handleAddActivity)}
              >
                {isPendingMutateAddItem ? <div className="loading loading-infinity loading-lg"></div> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddItem;
