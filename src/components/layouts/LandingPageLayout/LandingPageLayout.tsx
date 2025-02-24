import PageHead from "@/components/commons/PageHead";
import { Fragment } from "react";
import LandingPageLayoutNavbar from "./LandingPageLayloutNavbar";
import LandingPageLayoutFooter from "./LandingPageLayoutFooter";

interface PropType {
  title?: string;
  children: React.ReactNode;
}

const LandingPageLayout = (props: PropType) => {
  const { title, children } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <LandingPageLayoutNavbar />
      {children}
      <LandingPageLayoutFooter />
    </Fragment>
  );
};

export default LandingPageLayout;
