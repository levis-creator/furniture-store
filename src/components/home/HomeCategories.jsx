"use client";

import { getAll } from "@/api/dummydata";
import { SETDATA } from "@/constants";
import useDataContext from "@/hooks/useDataContext";
import { useEffect, useRef, useState } from "react";

const HomeCategories = () => {
  const { dispatch } = useDataContext();
  const [all, setAll] = useState([]);
  const [active, setActive] = useState(false);
  const buttonRef = useRef();
  useEffect(() => {
    const fetch = async () => {
      const response = await getAll();
      setAll(response.products);
    };
    fetch();
  }, []);
  const categories = all.map(({ category }) => ({ category }));
  const finalCategories = categories.map((item) => item.category);
  const unduplicated_categories = [...new Set(finalCategories)];

  const handleCategory = async (category) => {
    const filtered_data = all.filter((item) => item.category === category);

    dispatch({
      type: SETDATA,
      payload: category === null ? all : filtered_data,
    });
    setActive(!active);
    console.log(buttonRef.current);
  };
  return (
    <div
      className="
      px-6 sm:px-12 md:px-16 lg:px-24
    flex flex-wrap items-center justify-center my-8 gap-2"
    >
      <Button button_name="All products" onClick={() => handleCategory(null)} />

      {unduplicated_categories.map((item, i) => (
        <Button
          onClick={() => handleCategory(item)}
          key={i}
          button_name={item}
        />
      ))}
    </div>
  );
};

export default HomeCategories;

const Button = ({ onClick, button_name }) => {
  const buttonRef = useRef();
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      name={button_name}
      className={`font-semibold border-2 px-4 py-3 rounded-full border-slate-400`}
    >
      {console.log(buttonRef.current)}
      {button_name}
    </button>
  );
};
