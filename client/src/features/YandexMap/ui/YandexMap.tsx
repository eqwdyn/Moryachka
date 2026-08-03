import { Map, Placemark } from "@pbe/react-yandex-maps";
import cl from "./YandexMap.module.css";
import type { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties;
}

export const YandexMap: FC<Props> = ({ style }) => {
  const geoPos = [45.038570716882354, 35.38287330431649];
  return (
    <Map
      defaultState={{
        center: geoPos,
        zoom: 16,
      }}
      className={cl.map}
      style={style}
    >
      <Placemark defaultGeometry={geoPos} />
    </Map>
  );
};
