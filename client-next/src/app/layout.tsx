import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./normalize.css";
import "./index.css";
import { Header } from "@/shared/ui/Header";
import cl from "./layout.module.css";
import Providers from "@/app/providers";

const montserAlter = Montserrat_Alternates({
  weight: ["400", "600"],
  variable: "--font-montserrat-alternates",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Морячка",
  description:
    "Кафе морячка по адресу: г. Феодосия, просп. Айвазовского 12А. Вкусная, домашняя, свежая еда. Приятная атмосфера",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={montserAlter.className}>
      <body>
        <Header />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
