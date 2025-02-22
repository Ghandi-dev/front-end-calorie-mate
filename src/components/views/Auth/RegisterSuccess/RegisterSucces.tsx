import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image src="/images/send-email.svg" alt="logo" width={380} height={380} />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold text-danger-500">Register Success</h2>
        <p className="text-small">Your account has been successfully created. Please check your email to verify your account.</p>
        <button className="mt-4 w-fit btn btn-primary text-base-100" onClick={() => router.push("/auth/login")}>
          Back to Login Page
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
