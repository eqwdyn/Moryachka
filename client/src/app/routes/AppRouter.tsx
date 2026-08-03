import { useAuthContext } from "@app/providers/AuthContext";
import { paths, privatePaths } from "@app/routes/routes";
import { BackFall } from "@pages/BackFall";
import { LoaderPage } from "@pages/LoaderPage";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { isAdmin, isPrimaryLoading } = useAuthContext();
  return (
    <Routes>
      {paths.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}

      {isAdmin && !isPrimaryLoading ? (
        privatePaths.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))
      ) : isPrimaryLoading ? (
        <Route path="*" element={<LoaderPage />} />
      ) : null}

      {/* 404 */}
      <Route path="*" element={<BackFall />} />
    </Routes>
  );
};
