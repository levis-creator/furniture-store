"use client";

import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("must be data context provider");
  }
  return context;
};

export default useDataContext;
