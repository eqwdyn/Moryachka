import { LoaderPage } from "@pages/LoaderPage";
import { lazy, Suspense } from "react";

const AdminLayout = lazy(() => import("@widgets/AdminLayout"));

export const AdminPanel = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
      <AdminLayout />
    </Suspense>
  );
};
