import { Loader } from "@widgets/Loader";
import cl from "./LoaderPage.module.css";

export const LoaderPage = () => {
  return (
    <section className={cl.container}>
      <Loader />
    </section>
  );
};
