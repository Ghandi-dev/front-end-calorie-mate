import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
  const t = useTranslations("auth");
  const router = useRouter();
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-10 p-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image src="/images/illustration/send-email.svg" alt="logo" width={380} height={380} />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold text-danger-500">{t("title_success_register")}</h2>
        <p className="text-small">{t("message_success_register")}</p>
        <button className="mt-4 w-fit btn btn-primary text-base-100" onClick={() => router.push("/auth/login")}>
          {t("back_to_login")}
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
