import AuthLayout from "@/components/layouts/AuthLayout";
import Activation from "@/components/views/Auth/Activation";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";
import authServices from "@/services/auth.service";

interface PropTypes {
  status: "success" | "failed";
}

const ActivationPage = (props: PropTypes) => {
  return (
    <AuthLayout title="CalorieMate | Activation">
      <Activation {...props} />
    </AuthLayout>
  );
};

export async function getServerSideProps(contex: { query: { code: string } }) {
  try {
    const result = await authServices.activation({ code: contex.query.code });

    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    } else {
      return {
        props: {
          status: "failed",
        },
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      props: {
        status: "failed",
      },
    };
  }
}

export default ActivationPage;

export const getStaticProps = getStaticPropsWithTranslations();
