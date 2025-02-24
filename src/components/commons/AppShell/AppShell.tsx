import Toaster from "@/components/ui/Toaster";
import { defaultToaster, ToasterContext } from "@/context/ToasterContext";
import { cn } from "@/utils/cn";
import { Inter } from "next/font/google";
import { ReactNode, useContext, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface PropsType {
  children: ReactNode;
}

const AppShell = (props: PropsType) => {
  const { children } = props;
  const { toaster, setToaster } = useContext(ToasterContext);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setToaster(defaultToaster);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [toaster, setToaster]);
  return (
    <main className={cn(inter.className)}>
      {children}
      {toaster.type !== "" && <Toaster type={toaster.type} message={toaster.message} />}
    </main>
  );
};

export default AppShell;
