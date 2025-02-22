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
      <div className="py-10 md:p-6">{children}</div>
      <LandingPageLayoutFooter />
    </Fragment>
  );
};

export default LandingPageLayout;
