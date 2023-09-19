import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import banner from "../Photos/banner.png";
import banner768 from "../Photos/wal768.png";

import Style from "../style/Carrousel.module.css";

function Carrousel() {
  const data = [
    {
      id: "1",
      image: `${banner}`,
    },
    {
      id: "2",
      image: `${banner}`,
    },
    {
      id: "3",
      image: `${banner}`,
    },
    {
      id: "4",
      image: `${banner}`,
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      className={Style.Carrousel}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt="Slider" className={Style.CarrouselImg} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carrousel;
