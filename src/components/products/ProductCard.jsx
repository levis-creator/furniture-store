import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ data }) => {
  return (
    <Link href={`/shop/${data.id}`}>
      <div className="w-full text-center shadow-md rounded-md relative">
        <div className="absolute bg-red-700 text-white px-2 ">20% discount</div>
        <div className="absolute right-0 text-white px-2 bg-black">New</div>
        <div className="bg-slate-100 inline-flex justify-center w-full h-52">
          <Image
            src={data.thumbnail}
            unoptimized
            width={0}
            height={0}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p>{data.title}</p>
        <h3 className="font-semibold">Ksh. {data.price}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
