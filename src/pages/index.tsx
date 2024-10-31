import { NextPageWithLayout } from "@/types/common";
import { DefaultLayout } from "@/components/layouts";
import { HomeComponent } from "@/components/page-components";
import Head from "next/head";

const Index: NextPageWithLayout = () => {
  return <HomeComponent />;
};

Index.Layout = DefaultLayout;

export default Index;
