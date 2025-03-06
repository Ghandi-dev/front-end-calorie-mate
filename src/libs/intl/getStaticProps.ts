import { GetStaticProps } from "next";

export const getStaticPropsWithTranslations = (defaultLocale = "id"): GetStaticProps => {
  return async ({ locale }) => {
    const lang = locale || defaultLocale;
    const messages = (await import(`@/locales/${lang}.json`)).default;

    return {
      props: { messages },
    };
  };
};
