import { Fragment, useEffect } from "react";
import { Controller } from "react-hook-form";
import useAddDailyLogModal from "./useAddDailyLogModal";
import { cn } from "@/utils/cn";

interface PropTypes {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  refecthDailyLog: () => void;
}

const AddDailyLogModal = (props: PropTypes) => {
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
          <h1 className="text-xl text-neutral text-center font-bold">Daily Log Form</h1>
          <form className={cn("flex flex-col mt-4", Object.keys(errors).length > 0 ? "gap-1" : "gap-4")} onSubmit={handleSubmitForm(handleAddDailyLog)}>
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Weight</span>
                  </label>
                  <input {...field} type="text" placeholder="Enter weight" className="input input-bordered w-full" />
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
                    <span className="label-text">Height</span>
                  </label>
                  <input {...field} type="text" placeholder="Enter height" className="input input-bordered w-full" />
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
                    <span className="label-text">Goal</span>
                  </label>
                  <select {...field} className="select select-bordered w-full">
                    <option value={""} disabled selected>
                      Select your goal
                    </option>
                    <option value={"lose"}>Lose Weight</option>
                    <option value={"maintain"}>Maintain Weight</option>
                    <option value={"gain"}>Gain Weight</option>
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
                    <span className="label-text">Goal</span>
                  </label>
                  <select {...field} className="select select-bordered w-full">
                    <option value={""} disabled selected>
                      Select your activity level
                    </option>
                    <option value={"sedentary"}>Sedentary</option>
                    <option value={"lightly active"}>Lightly Active</option>
                    <option value={"moderately active"}>Moderately Active</option>
                    <option value={"very active"}>Very Active</option>
                    <option value={"super active"}>Super Active</option>
                  </select>
                  {errors.activityLevel && <p className="text-error">{errors.activityLevel.message}</p>}
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
                onClick={handleSubmitForm(handleAddDailyLog)}
              >
                {isPendingMutateAddDailyLog ? <div className="loading loading-infinity loading-lg"></div> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddDailyLogModal;
