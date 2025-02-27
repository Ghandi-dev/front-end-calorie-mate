import MainLayout from "@/components/layouts/MainLayout";
import DailyLog from "@/components/views/Main/DailyLog";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const DailyLogPage = () => {
  return (
    <MainLayout title="CalorieMate | Dashboard">
      <DailyLog />
    </MainLayout>
  );
};

export default DailyLogPage;

export const getStaticProps = getStaticPropsWithTranslations();
