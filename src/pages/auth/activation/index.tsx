import AuthLayout from "@/components/layouts/AuthLayout";
import Activation from "@/components/views/Auth/Activation";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const ActivationPage = () => {
  return (
    <AuthLayout title="CalorieMate | Activation">
      <Activation />
    </AuthLayout>
  );
};

export default ActivationPage;

export const getStaticProps = getStaticPropsWithTranslations();
