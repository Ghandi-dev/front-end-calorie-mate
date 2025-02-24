import PageHead from "@/components/commons/PageHead";
import SidebarLayout from "./SidebarLayout";
import NavbarLayout from "./NabvarLayout";
import { Fragment } from "react";

interface PropType {
  title?: string;
  children: React.ReactNode;
}

const MainLayout = (props: PropType) => {
  const { title, children } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <div className="flex min-h-screen bg-gray-100">
        <SidebarLayout />
        <main className="flex-1">
          <NavbarLayout />
          {children}
        </main>
      </div>
    </Fragment>
  );
};

export default MainLayout;
