import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/Auth/Register";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const RegisterPage = () => {
  return (
    <AuthLayout title="CalorieMate | Register">
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;

export const getStaticProps = getStaticPropsWithTranslations();
