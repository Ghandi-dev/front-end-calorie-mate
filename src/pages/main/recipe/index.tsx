import MainLayout from "@/components/layouts/MainLayout";
import Recipe from "@/components/views/Main/Recipe";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

const RecipePage = () => {
  return (
    <MainLayout title="CalorieMate | Recipe">
      <Recipe />
    </MainLayout>
  );
};

export default RecipePage;

export const getStaticProps = getStaticPropsWithTranslations();
