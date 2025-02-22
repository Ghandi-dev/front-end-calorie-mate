import Head from "next/head";

interface PropsType {
  title?: string;
}

const PageHead = (props: PropsType) => {
  const { title = "CalorieMate" } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Calorie Calculator and health tracker" />
      <link rel="icon" href="/images/logo.png" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;
