"use client";

import { getProduct } from "@/api/dummydata";
import Image from "next/image";
import { useParams } from "next/navigation";
import { BiCheckCircle } from "react-icons/bi";
const page = async () => {
  const params = useParams();
  const data = await getProduct(params.id);

  return (
    <div className="mt-24">
      <div className="flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 md:flex-row md:gap-8">
        <div className="bg-slate-100 h-full md:basis-3/4 lg:basis-1/2 w-full">
          <Image
            unoptimized
            src={data.thumbnail}
            alt={data.title}
            width={0}
            height={0}
            className="w-full h-full"
          />
        </div>
   
        <div className="space-y-5 md:basis-3/6">
          <h2>{data.title}</h2>
          <div className="flex items-center text-xs gap-1 fse">
            <div className="text-base ">
              <BiCheckCircle />
            </div>{" "}
            <h2 className="uppercase">In stock</h2>
          </div>
          <h2 className="font-bold">{data.price}</h2>
          <div>
            <h2>Description</h2>
            <p>{data.description} </p>
          </div>
          <button className="bg-black text-white w-fit px-5 py-3">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
