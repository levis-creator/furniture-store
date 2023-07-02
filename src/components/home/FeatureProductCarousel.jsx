"use client";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarauoselITem from "./CarauoselITem";
// swiper css
import { data } from "@/api/fakedata";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const FeatureProductCarousel = () => {
  data;
  return (
    <>
      <Swiper
        className="h-72 sm:h-96 md:h-screen"
        modules={[Pagination, EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="bg-slate-100 h-full ">
            <CarauoselITem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeatureProductCarousel;
