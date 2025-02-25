import PageHead from "@/components/commons/PageHead";
import SidebarLayout from "./SidebarLayout";
import NavbarLayout from "./NabvarLayout";
import { Fragment } from "react";
import BottomMenuLayout from "./BottomMenuLayout";

interface PropType {
  title?: string;
  children: React.ReactNode;
}

const MainLayout = (props: PropType) => {
  const { title, children } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <div className="flex min-h-screen bg-base-200">
        {/* Sidebar dengan tinggi penuh */}
        <SidebarLayout />

        {/* Main content wrapper */}
        <main className="flex flex-col flex-1 min-h-screen">
          {/* Navbar di atas */}
          <NavbarLayout />

          {children}

          {/* Bottom Menu di bawah */}
          <BottomMenuLayout />
        </main>
      </div>
    </Fragment>
  );
};

export default MainLayout;
