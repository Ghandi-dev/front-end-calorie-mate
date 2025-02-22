import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import AppShell from "@/components/commons/AppShell";
import { onErrorHandler } from "@/libs/axios/responseHandler";
import { ToasterProvider } from "@/context/ToasterContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError(error) {
        onErrorHandler(error);
        return false;
      },
    },
    mutations: {
      onError: onErrorHandler,
    },
  },
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ToasterProvider>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </ToasterProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
