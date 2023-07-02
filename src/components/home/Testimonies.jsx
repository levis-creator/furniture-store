"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonyItem from "./TestimonyItem";
import profile from "@/assets/angshu-purkait-pgQ1-bDAkTQ-unsplash.jpg";
import profile1 from "@/assets/arun-prakash-4cCbxdO_7zM-unsplash.jpg";
import profile2 from "@/assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg";
// swiper  css
import "swiper/css";
const Testimonies = () => {
  const sampleData = [
    {
      id: 1,
      profileImage: profile,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio eius sapiente. Qui, quas asperiores. At eum ipsam quo! Quibusdam debitis culpa assumenda quos eum tenetur aspernatur architecto, accusamus adipisci.",
    },
    {
      id: 2,
      profileImage: profile1,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio eius sapiente. Qui, quas asperiores. At eum ipsam quo! Quibusdam debitis culpa assumenda quos eum tenetur aspernatur architecto, accusamus adipisci.",
    },
    {
      id: 3,
      profileImage: profile2,
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio eius sapiente. Qui, quas asperiores. At eum ipsam quo! Quibusdam debitis culpa assumenda quos eum tenetur aspernatur architecto, accusamus adipisci.",
    },
  ];
  return (
    <div className="text-center mt-10  px-6 sm:px-12 md:px-16 lg:px-24">
      <h2 className="font-semibold">Testimonies</h2>
      <Swiper className="h-fit" spaceBetween={50} loop={true}>
        {sampleData.map((item) => (
          <SwiperSlide className="h-full" key={item.id}>
            <TestimonyItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonies;
