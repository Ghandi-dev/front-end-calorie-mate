import Image from "next/image";
import { useRouter } from "next/router";

interface PropsType {
  status: "success" | "failed";
}

const Activation = (props: PropsType) => {
  const router = useRouter();
  const { status } = props;
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image src={status === "success" ? "/images/success.svg" : "/images/failed.svg"} alt="success" width={480} height={480} />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold text-danger-500">{status === "success" ? "Activation Success" : "Activation Failed"}</h2>
        <p className="text-small">{status === "success" ? "Thank you for activating your account" : "Failed to activate your account"}</p>
        <button className="mt-4 w-fit btn btn-primary text-base-100" onClick={() => router.push("/auth/login")}>
          Back to Login Page
        </button>
      </div>
    </div>
  );
};

export default Activation;
