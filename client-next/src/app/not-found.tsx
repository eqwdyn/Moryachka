import { NotFoundPageBackfall } from "@/shared/ui/NotFoundPageBackfall/ui/NotFoundPageBackfall";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NotFoundPageBackfall />
    </section>
  );
}
