import MainLayout from "@/components/layouts/MainLayout";
import Dashboard from "@/components/views/Main/Dashboard";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const DashboardPage = () => {
  return (
    <MainLayout title="CalorieMate | Dashboard">
      <Dashboard />
    </MainLayout>
  );
};

export default DashboardPage;

export const getStaticProps = getStaticPropsWithTranslations();
