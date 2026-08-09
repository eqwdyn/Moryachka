import { Backfall } from "@/pages/NotFound/components/Backfall";

export const NotFoundPage = () => {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backfall />
    </section>
  );
};
