"use client";
import ProductCard from "@/components/products/ProductCard";
import useDataContext from "@/hooks/useDataContext";

const page = () => {
  const { dataSet } = useDataContext();
  return (
    <div className="mt-24 relative ">
      <div className="w-full top-20 fixed md:absolute md:top-0 z-10 md:z-0 bg-white flex justify-between px-6 sm:px-12 md:px-16 lg:px-24">
        <select name="filter" id="filter" className="bg-white">
          <option value="new">New</option>
          <option value="low-to-high">Low to high</option>
          <option value="high-to-low">High to low</option>
        </select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 px-6 sm:px-12 md:px-16 lg:px-24 gap-2 pt-10">
        {dataSet.map((items) => (
          <ProductCard key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default page;
