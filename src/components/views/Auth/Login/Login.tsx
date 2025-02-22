import Link from "next/link";
import useLogin from "./useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

import Image from "next/image";

const Login = () => {
  const { isVisible, toggleVisibility, control, handleSubmit, handleLogin, isPendingLogin, errors } = useLogin();

  return (
    <div className="hero w-100">
      <div className="hero-content w-full max-w-full flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Image src="/images/logo-with-text.png" alt="login" width={500} height={500} />
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form className={cn("flex flex-col card-body", Object.keys(errors).length > 0 ? "gap-2" : "gap-4")} onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-3xl font-bold text-danger-500 text-center">Login</h2>
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Username or email</span>
                  </label>
                  <input {...field} type="text" placeholder="Username or email" className="input input-bordered" />
                </div>
              )}
            />
            {errors.identifier && <p className="text-error">{errors.identifier.message}</p>}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input {...field} type={isVisible ? "text" : "password"} className="grow" placeholder="Password" />
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? <FaEye className="text-xl text-default-400" /> : <FaEyeSlash className="text-xl text-default-400" />}
                    </button>
                  </label>
                </div>
              )}
            />
            {errors.password && <p className="text-error">{errors.password.message}</p>}
            <div className="form-control mt-4">
              <button disabled={isPendingLogin} type="submit" className="btn btn-primary text-base-100">
                {isPendingLogin ? <span className="loading loading-infinity loading-lg"></span> : "Login"}
              </button>
            </div>
            <div className="divider">
              <p className="text-small">
                Don{"'"}t have an account?&nbsp;
                <Link href="/auth/register" className="font-semibold text-primary">
                  Register here
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
