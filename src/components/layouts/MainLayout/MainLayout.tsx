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
        {/* Sidebar dengan tinggi penuh & lebar penuh */}
        <aside className="fixed hidden top-0 left-0 w-screen h-screen bg-white lg:flex flex-col gap-6 z-50 lg:w-64">
          <SidebarLayout />
        </aside>

        {/* Main content wrapper */}
        <main className="flex flex-col flex-1 min-h-screen lg:ml-64">
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
