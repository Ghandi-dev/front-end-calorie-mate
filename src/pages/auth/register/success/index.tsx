import AuthLayout from "@/components/layouts/AuthLayout";
import RegisterSuccess from "@/components/views/Auth/RegisterSuccess/RegisterSucces";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const RegisterSuccessPage = () => {
  return (
    <AuthLayout title="CalorieMate | Register Success">
      <RegisterSuccess />
    </AuthLayout>
  );
};

export default RegisterSuccessPage;

export const getStaticProps = getStaticPropsWithTranslations();
