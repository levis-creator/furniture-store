"use client";
import HomeProductsCatalogue from "@/components/general/HomeProductsCatalogue";
import FeatureProductCarousel from "@/components/home/FeatureProductCarousel";
import HomeCategories from "@/components/home/HomeCategories";
import Testimonies from "@/components/home/Testimonies";
import Image from "next/image";
import Link from "next/link";
import HomeImage from "../assets/spacejoy-IH7wPsjwomc-unsplash.jpg";
const Home = async () => {
 
  return (
    <>
      <div className="mt-20">
        <FeatureProductCarousel />
        <div className="flex flex-col md:flex-row md:px-16 lg:px-24">
          <div className="text-center md:text-left my-5 space-y-5 basis-1/2">
            <h1 className="font-bold text-2xl underline underline-offset-8 ">
              Welcome
            </h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              nulla quaerat ea rerum aut veritatis doloremque necessitatibus,
              suscipit corrupti odio atque fuga repellat sapiente aliquam
              nostrum quod officiis amet quidem.
            </p>
            <Link className="font-semibold hover:underline " href="/about">
              Explore more
            </Link>
          </div>
          <div className="basis-1/2">
            <Image
              src={HomeImage}
              width={0}
              height={0}
              alt="home image"
              className="h-60 w-full md:h-80 object-cover"
            />
          </div>
        </div>
        <div className="w-full text-center">
          <HomeCategories />
          <HomeProductsCatalogue  />
          <Testimonies />
        </div>
      </div>
    </>
  );
};
export default Home;
