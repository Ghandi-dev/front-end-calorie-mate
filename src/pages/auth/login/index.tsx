import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/components/views/Auth/Login";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const LoginPage = () => {
  return (
    <AuthLayout title="CalorieMate | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;

export const getStaticProps = getStaticPropsWithTranslations();
