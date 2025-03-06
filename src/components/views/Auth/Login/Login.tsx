import Image from "next/image";
import Link from "next/link";
import useLogin from "./useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";

const Login = () => {
  const t = useTranslations("form");
  const { isVisible, toggleVisibility, control, handleSubmit, handleLogin, isPendingLogin, errors } = useLogin();

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <Image src="/images/logo-with-text.png" alt="login" width={500} height={500} className="w-[200px] lg:w-[500px]" />
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl">
          <form className={cn("flex flex-col card-body", Object.keys(errors).length > 0 ? "gap-1" : "gap-4")} onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-3xl font-bold text-content text-center">{t("login")}</h2>
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">{t("identifier")}</span>
                  </label>
                  <input {...field} type="text" placeholder={t("identifier")} className="input input-bordered w-full" />
                  {errors.identifier && <p className="text-error">{errors.identifier.message}</p>}
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
                  <label className="input input-bordered flex items-center gap-2 w-full ">
                    <input {...field} type={isVisible ? "text" : "password"} className="grow w-full" placeholder={t("password")} />
                    <button className="focus:outline-hidden" type="button" onClick={toggleVisibility}>
                      {isVisible ? <FaEye className="text-xl text-default-400" /> : <FaEyeSlash className="text-xl text-default-400" />}
                    </button>
                  </label>
                  {errors.password && <p className="text-error">{errors.password.message}</p>}
                </div>
              )}
            />
            <div className="form-control mt-4">
              <button disabled={isPendingLogin} type="submit" className="btn btn-primary text-base-100 w-full">
                {isPendingLogin ? <span className="loading loading-infinity loading-lg"></span> : t("login")}
              </button>
            </div>
            <div className="divider text-center">
              <p className="text-sm w-full break-words text-center">
                {t("dont_have_account")}&nbsp;
                <Link href="/auth/register" className="block sm:inline font-semibold text-primary">
                  {t("register_here")}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
