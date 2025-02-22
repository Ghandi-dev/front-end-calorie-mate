import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const { visiblePassword, handleVisiblePassword, control, handleSubmit, handleRegister, isPendingRegister, errors } = useRegister();

  return (
    <div className="hero w-100">
      <div className="hero-content w-full max-w-full flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Image src="/images/logo-with-text.png" alt="login" width={500} height={500} />
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-8">
          <form className={cn("flex flex-col card-body", Object.keys(errors).length > 0 ? "gap-1" : "gap-4")} onSubmit={handleSubmit(handleRegister)}>
            <h2 className="text-3xl font-bold text-danger-500 text-center">Create an acount</h2>
            <div className="flex flex-col lg:flex-row max-w-full gap-4">
              <Controller
                name="fullname"
                control={control}
                render={({ field }) => (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Fullname</span>
                    </label>
                    <input {...field} type="text" placeholder="Fullname" className="input input-bordered w-full" />
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
                      <span className="label-text">Username</span>
                    </label>
                    <input {...field} type="text" placeholder="Username" className="input input-bordered w-full" />
                    {errors.username && <p className="text-error">{errors.username.message}</p>}
                  </div>
                )}
              />
            </div>
            <div className="flex flex-col lg:flex-row max-w-full gap-4">
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Gender</span>
                    </label>
                    <select {...field} className="select select-bordered">
                      <option disabled selected>
                        Select your gender
                      </option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
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
                      <span className="label-text">Birth Date</span>
                    </label>
                    <input
                      {...field}
                      type="date"
                      className="input input-bordered w-full"
                      value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                      onChange={(e) => field.onChange(new Date(e.target.value))}
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
                    <span className="label-text">Email</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input {...field} type="email" className="grow w-full" placeholder="Email" />
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
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input {...field} type={visiblePassword.password ? "text" : "password"} className="grow w-full" placeholder="Password" />
                    <button className="focus:outline-none" type="button" onClick={() => handleVisiblePassword("password")}>
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
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input {...field} type={visiblePassword.confirmPassword ? "text" : "password"} className="grow w-full" placeholder="Confirm Password" />
                    <button className="focus:outline-none" type="button" onClick={() => handleVisiblePassword("confirmPassword")}>
                      {visiblePassword.confirmPassword ? <FaEye className="text-xl text-default-400" /> : <FaEyeSlash className="text-xl text-default-400" />}
                    </button>
                  </label>
                  {errors.confirmPassword && <p className="text-error">{errors.confirmPassword.message}</p>}
                </div>
              )}
            />
            <div className="form-control mt-4">
              <button disabled={isPendingRegister} type="submit" className="btn btn-primary text-base-100 w-full">
                {isPendingRegister ? <span className="loading loading-infinity loading-lg"></span> : "Register"}
              </button>
            </div>
            <div className="divider">
              <p className="text-small">
                have an account?&nbsp;
                <Link href="/auth/login" className="font-semibold text-primary">
                  Login here
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
