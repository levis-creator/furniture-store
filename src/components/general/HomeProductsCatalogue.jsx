import ProductCard from "../products/ProductCard";
import Link from "next/link";
import { data } from "@/api/fakedata";
import useDataContext from "@/hooks/useDataContext";
import { useEffect } from "react";
import { getAll } from "@/api/dummydata";
import { SETDATA } from "@/constants";
const HomeProductsCatalogue = () => {
  const { dataSet, dispatch } = useDataContext();
  useEffect(() => {
    const fetching = async () => {
      const response = await getAll().then((data) => {
        dispatch({
          type: SETDATA,
          payload: data.products,
        });
      });
      return response;
    };
    fetching();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full items-center px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {dataSet.slice(0, 12).map((items) => (
          <ProductCard key={items.id} data={items} />
        ))}
      </div>
      <div className="font-semibold outline w-fit px-4 rounded-full">
        <Link href={"/shop"}>Load more</Link>
      </div>
    </div>
  );
};

export default HomeProductsCatalogue;
