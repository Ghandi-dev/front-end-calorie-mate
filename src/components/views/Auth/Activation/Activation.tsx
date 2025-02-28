import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import useActivation from "./useActivation";

const Activation = () => {
  const t = useTranslations("auth");
  const router = useRouter();
  const { status } = useActivation();
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image src={status === "success" ? "/images/success.svg" : "/images/failed.svg"} alt="success" width={480} height={480} />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold text-danger-500">{status === "success" ? t("title_success_activation") : t("title_failed_activation")}</h2>
        <p className="text-small">{status === "success" ? t("message_success_activation") : t("message_failed_activation")}</p>
        <button className="mt-4 w-fit btn btn-primary text-base-100" onClick={() => router.push("/auth/login")}>
          {t("back_to_login")}
        </button>
      </div>
    </div>
  );
};

export default Activation;
