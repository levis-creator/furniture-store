import React from "react";

const HomeCategories = () => {
  return (
    <div
      className="
      px-6 sm:px-12 md:px-16 lg:px-24
    flex flex-wrap items-center justify-center my-8"
    >
      <button className="font-semibold border-2 px-4 py-3 rounded-full border-slate-400">
        Show all
      </button>
      <button className="font-semibold active:border-2 px-4 py-3 rounded-full border-slate-400">
        Show all
      </button>
      <button className="font-semibold active:border-2 px-4 py-3 rounded-full border-slate-400">
        Show all
      </button>
      <button className="font-semibold active:border-2 px-4 py-3 rounded-full border-slate-400">
        Show all
      </button>
      <button className="font-semibold active:border-2 px-4 py-3 rounded-full border-slate-400">
        Show all
      </button>
    </div>
  );
};

export default HomeCategories;
