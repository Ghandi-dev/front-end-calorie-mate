import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Home from "@/components/views/Home";
import { getStaticPropsWithTranslations } from "@/libs/intl/getStaticProps";

export default function HomePage() {
  return (
    <LandingPageLayout title="CalorieMate | Home">
      <Home />
    </LandingPageLayout>
  );
}

export const getStaticProps = getStaticPropsWithTranslations();
