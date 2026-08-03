import { Header } from "@widgets/Header";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { YandexMap } from "@features/YandexMap";
import cl from "./AboutUsLayout.module.css";

export const AboutUsLayout = () => {
  return (
    <>
      <div className={cl.headerWrapper}>
        <Header />
      </div>
      <ContentContainer>
        <YandexMap style={{ width: 300, height: 300 }} />
      </ContentContainer>
    </>
  );
};
