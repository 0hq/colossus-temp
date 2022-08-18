import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import LogRocket from "logrocket";
import PlausibleProvider from "next-plausible";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "src/components/SEO";
import { trpc } from "src/utils/trpc";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  LogRocket.init("insilica-labs/colossus");
  return (
    <SessionProvider session={session}>
      <PlausibleProvider domain="colossus.fyi">
        <DefaultSeo />
        <Component {...pageProps} />
      </PlausibleProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
