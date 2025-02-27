import MainLayout from "@/components/layouts/MainLayout";
import Report from "@/components/views/Main/Report";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const ReportPage = () => {
  return (
    <MainLayout title="CalorieMate | Report">
      <Report />
    </MainLayout>
  );
};

export default ReportPage;

export const getStaticProps = getStaticPropsWithTranslations();
