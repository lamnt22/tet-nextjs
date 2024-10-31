import { LoginLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/types";
import { LoginComponent } from "@/components/page-components";

const Login: NextPageWithLayout = () => {
  return <LoginComponent />
};

Login.Layout = LoginLayout;

export default Login;
