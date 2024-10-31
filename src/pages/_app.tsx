import { AppPropsWithLayout } from "@/types/common";
import { Fragment } from "react";
import { AuthProviderLayout } from "@/components/layouts";

import "@/app/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ? Component.Layout : Fragment;

  return (
    <Fragment>
      <Head>
        <title>WHITE SCORPION OFFICIAL FANCLUB</title>
      </Head>
      <AuthProviderLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProviderLayout>
    </Fragment>
  );
}
