"use client";

import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";
import cl from "./YandexMap.module.css";

export const YandexMap = () => {
  const geoPos = [45.038758, 35.382699];

  return (
    <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YMAP_KEY }}>
      <Map defaultState={{ center: geoPos, zoom: 16 }} className={cl.map}>
        <Placemark geometry={geoPos} />
      </Map>
    </YMaps>
  );
};
