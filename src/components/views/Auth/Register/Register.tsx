import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("form");
  const { visiblePassword, handleVisiblePassword, control, handleSubmit, handleRegister, isPendingRegister, errors } = useRegister();

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse p-2">
        <Image src="/images/logo-with-text.png" alt="register" width={500} height={500} className="w-[200px] lg:w-[500px]" />
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl">
          <form className={cn("flex flex-col card-body", Object.keys(errors).length > 0 ? "gap-1" : "gap-4")} onSubmit={handleSubmit(handleRegister)}>
            <h2 className="text-3xl font-bold text-content text-center">{t("create_account")}</h2>
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("fullname")}</span>
                  </label>
                  <input {...field} type="text" placeholder={t("fullname")} className="input input-bordered w-full" />
                  {errors.fullname && <p className="text-error">{errors.fullname.message}</p>}
                </div>
              )}
            />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("username")}</span>
                  </label>
                  <input {...field} type="text" placeholder={t("username")} className="input input-bordered w-full" />
                  {errors.username && <p className="text-error">{errors.username.message}</p>}
                </div>
              )}
            />
            <div className="flex flex-col lg:flex-row max-w-full gap-4">
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">{t("gender")}</span>
                    </label>
                    <select {...field} className="select select-bordered w-full">
                      <option disabled selected value={""}>
                        {t("select_gender")}
                      </option>
                      <option value={"male"}>{t("male")}</option>
                      <option value={"female"}>{t("female")}</option>
                    </select>
                    {errors.gender && <p className="text-error text-sm mt-1">{errors.gender.message}</p>}
                  </div>
                )}
              />
              <Controller
                name="birthDate"
                control={control}
                render={({ field }) => (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">{t("birth_date")}</span>
                    </label>
                    <input
                      {...field}
                      type="date"
                      className="input input-bordered w-full"
                      value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value ? new Date(value) : null);
                      }}
                    />
                    {errors.birthDate && <p className="text-error text-sm mt-1">{errors.birthDate.message}</p>}
                  </div>
                )}
              />
            </div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("email")}</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <input {...field} type="email" className="grow w-full" placeholder={t("email")} />
                  </label>
                  {errors.email && <p className="text-error">{errors.email.message}</p>}
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("password")}</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <input {...field} type={visiblePassword.password ? "text" : "password"} className="grow w-full" placeholder={t("password")} />
                    <button className="focus:outline-hidden" type="button" onClick={() => handleVisiblePassword("password")}>
                      {visiblePassword.password ? <FaEye className="text-xl text-default-400" /> : <FaEyeSlash className="text-xl text-default-400" />}
                    </button>
                  </label>
                  {errors.password && <p className="text-error">{errors.password.message}</p>}
                </div>
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("confirm_password")}</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <input
                      {...field}
                      type={visiblePassword.confirmPassword ? "text" : "password"}
                      className="grow w-full"
                      placeholder={t("confirm_password")}
                    />
                    <button className="focus:outline-hidden" type="button" onClick={() => handleVisiblePassword("confirmPassword")}>
                      {visiblePassword.confirmPassword ? <FaEye className="text-xl text-default-400" /> : <FaEyeSlash className="text-xl text-default-400" />}
                    </button>
                  </label>
                  {errors.confirmPassword && <p className="text-error">{errors.confirmPassword.message}</p>}
                </div>
              )}
            />
            <div className="form-control mt-4">
              <button disabled={isPendingRegister} type="submit" className="btn btn-primary text-base-100 w-full">
                {isPendingRegister ? <span className="loading loading-infinity loading-lg"></span> : t("register")}
              </button>
            </div>
            <div className="divider">
              <p className="text-sm">
                {t("already_have_account")}&nbsp;
                <Link href="/auth/login" className="font-semibold text-primary">
                  {t("login_here")}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
