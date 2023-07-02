import Appearin from "@/templates/Appearin";
import TextSlide from "@/templates/TextSlide";
import TextSlideDown from "@/templates/TextSlideDown";
import Image from "next/image";
import Link from "next/link";
const CarauoselITem = ({ data }) => {
  return (
    <div className="w-full min-h-full flex items-center justify-evenly px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="flex flex-col gap-4 basis-1/2 ">
        <div className="leading-relaxed">
          <TextSlide>
            <p className="text-xs sm:text-sm md:text-base">{data.title} </p>
          </TextSlide>
          <TextSlideDown>
            <h2 className="text-4xl font-semibold sm:text-5xl md:text-7xl ">
              sale {data.discount}
            </h2>
          </TextSlideDown>
        </div>
        <TextSlideDown up={true}>
          <Link href={`/shop/${data.id}`}>
            <button className="w-fit border px-5 py-3 border-slate-600 text-xs sm:text-base md:text-lg hover:bg-black hover:text-white">
              Shop Now
            </button>
          </Link>
        </TextSlideDown>
      </div>
      <Appearin className="basis-1/2">
        <Image
          src={data.image}
          width={0}
          height={0}
          alt="item"
          className=" h-40 sm:h-72 md:h-[500px] w-auto"
        />
      </Appearin>
    </div>
  );
};

export default CarauoselITem;
