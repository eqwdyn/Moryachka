import { PageLayout } from "@/shared/ui/PageLayout";
import cl from "./AboutUs.module.css";
import { YandexMap } from "@/shared/ui/YandexMap";
import Image from "next/image";

export const AboutUsPage = () => {
  return (
    <PageLayout>
      <div className={cl.layout}>
        <div>
          <h2 className={cl.title}>О нас</h2>
          <p className={cl.description}>
            Кафе «Морячка» в Феодосии (просп. Айвазовского, 12А) — место, где
            вкус встречается с настроением.
          </p>
          <p className={cl.description}>
            У нас не просто кормят — у нас создают атмосферу: играет музыка, по
            вечерам оживает танцпол, а уют и хороший ритм делают любой вечер
            особенным. В меню — сочные бургеры и блюда, ради которых хочется
            возвращаться.
          </p>
          <p className={cl.description}>
            Заходите за порцией вкуса и драйва — мы знаем, как сделать вечер
            ярче.
          </p>
          <h3 className={cl.subTitle}>Адрес:</h3>
          <p className={`${cl.description} ${cl.addressDesc}`}>
            <Image
              src="/svg/mark.svg"
              alt="Адрес"
              width={25}
              height={25}
              loading="eager"
            />
            г. Феодосия, просп. Айвазовского, 12А
          </p>
          <h4 className={cl.subTitle}>Контакты:</h4>
          <address className={cl.contacts}>
            <a href="tel:+79780017089" className={cl.contact}>
              <Image
                src="/svg/phone.svg"
                alt="Номер телефона"
                width={22}
                height={22}
                loading="eager"
              />
              <span>+7 (978) 001-70-89</span>
            </a>
            <div className={cl.contact}>
              <Image
                src="/svg/max.svg"
                alt="Месседжер Макс"
                width={22}
                height={22}
                loading="eager"
              />
              <span>+7 (978) 001-70-89</span>
            </div>
          </address>
        </div>
        <div className={cl.mapWrapper}>
          <YandexMap />
        </div>
      </div>
    </PageLayout>
  );
};
