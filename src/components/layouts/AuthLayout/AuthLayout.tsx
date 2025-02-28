import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  title?: string;
}

const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 py-10">
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-0 lg:p-6">{children}</section>
    </div>
  );
};

export default AuthLayout;
