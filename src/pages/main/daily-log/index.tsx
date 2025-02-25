import MainLayout from "@/components/layouts/MainLayout";
import DailyLog from "@/components/views/Main/DailyLog";

const DailyLogPage = () => {
  return (
    <MainLayout title="CalorieMate | Dashboard">
      <DailyLog />
    </MainLayout>
  );
};

export default DailyLogPage;
