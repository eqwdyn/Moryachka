import { LoaderPage } from "@pages/LoaderPage";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("@widgets/LoginLayout"));
export const Login = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Layout />
    </Suspense>
  );
};
