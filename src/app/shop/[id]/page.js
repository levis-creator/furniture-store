"use client"

import Image from "next/image";
import { useParams } from 'next/navigation';
import { BiCheckCircle } from "react-icons/bi";
import sample from "../../../assets/2-2-furniture-png-image.png";
const page = () => {
  const params= useParams()
  return (
    <div className="mt-24">
      <div className="flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 md:flex-row md:gap-8">
        <div className="bg-slate-100 h-fit  ">
          <Image src={sample} alt="" width={0} height={0} />
        </div>
        <div className="space-y-5">
          <h2>Product Title</h2>
          <div className="flex items-center text-xs gap-1 fse">
            <div className="text-base ">
              <BiCheckCircle />
            </div>{" "}
            <h2 className="uppercase">In stock</h2>
          </div>
          <h2 className="font-bold">price</h2>
          <div>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem est inventore sequi maxime soluta accusantium qui
              rem magni, quidem velit! Doloremque, sed maiores sint labore
              delectus inventore deserunt rem autem.
            </p>
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
