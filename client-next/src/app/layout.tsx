import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./styles/normalize.css";
import "./styles/index.css";
import { Header } from "@/shared/ui/Header";
import Providers from "@/app/providers";
import { BurgerSlide } from "@/shared/ui/BurgerSlide";

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
        {/* <Footer /> */}
        <BurgerSlide />
      </body>
    </html>
  );
}
